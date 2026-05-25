import { Project, SourceFile, ClassDeclaration, InterfaceDeclaration, EnumDeclaration, TypeAliasDeclaration, FunctionDeclaration, MethodSignature, MethodDeclaration, PropertyDeclaration, PropertySignature, ParameterDeclaration, JSDoc, Node, SyntaxKind, TypeParameterDeclaration } from "ts-morph";
import * as fs from "fs";
import * as path from "path";

// --- Configuration ---

const COMMON_NAMES = new Set([
  "Plugin", "Component", "App", "Vault", "Workspace", "MetadataCache",
  "TFile", "TFolder", "TAbstractFile", "FileManager",
  "MarkdownView", "ItemView", "View", "WorkspaceLeaf",
  "Editor", "MarkdownRenderer", "MarkdownPostProcessorContext",
  "Setting", "PluginSettingTab", "Modal", "Notice", "Menu", "MenuItem",
  "Command", "EventRef", "Events", "Keymap",
  "FuzzySuggestModal", "SuggestModal",
  "HoverPopover", "FileSystemAdapter",
]);

// Atlas domain grouping. Curated members take precedence; anything not listed is
// placed by heuristicDomain(), which always resolves to a known domain (falling
// back to "Other") so every class/interface has exactly one home.
interface AtlasDomain {
  title: string;
  blurb: string;
  members: string[]; // curated core members, in display order
}

const ATLAS_DOMAINS: AtlasDomain[] = [
  {
    title: "Plugin & lifecycle",
    blurb: "Entry points and the component lifecycle everything builds on.",
    members: ["Plugin", "App", "Component", "PluginManifest", "PluginSettingTab"],
  },
  {
    title: "Files & vault",
    blurb: "Reading, writing, watching, and resolving files and folders.",
    members: ["Vault", "TAbstractFile", "TFile", "TFolder", "FileManager", "FileSystemAdapter", "DataAdapter", "DataWriteOptions", "FileStats"],
  },
  {
    title: "Workspace & views",
    blurb: "Panes, leaves, and the view classes that render content into them.",
    members: ["Workspace", "WorkspaceLeaf", "WorkspaceItem", "WorkspaceParent", "WorkspaceSplit", "WorkspaceTabs", "WorkspaceSidedock", "WorkspaceMobileDrawer", "WorkspaceWindow", "WorkspaceRibbon", "View", "ItemView", "FileView", "EditableFileView", "MarkdownView", "MarkdownFileInfo"],
  },
  {
    title: "Editor & Markdown rendering",
    blurb: "Editing document text and rendering Markdown to the DOM.",
    members: ["Editor", "EditorPosition", "EditorRange", "EditorSelection", "EditorSelectionOrCaret", "EditorChange", "EditorTransaction", "MarkdownRenderer", "MarkdownRenderChild", "MarkdownPreviewView", "MarkdownPreviewRenderer", "MarkdownPostProcessor", "MarkdownPostProcessorContext", "MarkdownSectionInformation"],
  },
  {
    title: "Settings & UI components",
    blurb: "Setting rows and the reusable input widgets they hold.",
    members: ["Setting", "BaseComponent", "ValueComponent", "AbstractTextComponent", "TextComponent", "TextAreaComponent", "ToggleComponent", "DropdownComponent", "SliderComponent", "ButtonComponent", "ExtraButtonComponent", "ColorComponent", "SearchComponent", "ProgressBarComponent", "MomentFormatComponent"],
  },
  {
    title: "Modals & suggesters",
    blurb: "Dialogs and type-ahead pickers.",
    members: ["Modal", "SuggestModal", "FuzzySuggestModal", "AbstractInputSuggest", "PopoverSuggest", "ISuggestOwner", "FuzzyMatch", "HoverPopover", "HoverParent"],
  },
  {
    title: "Commands, menus & notices",
    blurb: "Command palette entries, context menus, and transient notifications.",
    members: ["Command", "Hotkey", "Menu", "MenuItem", "MenuSeparator", "Notice"],
  },
  {
    title: "Events & keymap",
    blurb: "Event registration/dispatch and keyboard handling.",
    members: ["Events", "EventRef", "Keymap", "KeymapContext", "KeymapInfo", "KeymapEventHandler", "KeymapEventListener", "Scope", "UserEvent"],
  },
  {
    title: "Metadata cache",
    blurb: "Parsed metadata about notes: links, headings, tags, frontmatter.",
    members: ["MetadataCache", "CachedMetadata", "FrontMatterCache", "FrontmatterLinkCache", "LinkCache", "EmbedCache", "HeadingCache", "TagCache", "ReferenceCache", "BlockCache", "SectionCache", "ListItemCache", "FootnoteCache", "FootnoteRefCache", "FileCache"],
  },
  {
    title: "Networking & platform",
    blurb: "HTTP requests, secret storage, and runtime platform detection.",
    members: ["RequestUrlParam", "RequestUrlResponse", "RequestUrlResponsePromise", "Platform", "SecretStorage", "CapacitorAdapter"],
  },
  {
    title: "Bases",
    blurb: "The Bases query engine and its configuration-driven view options.",
    members: [], // filled by the Bases* heuristic
  },
  {
    title: "Other",
    blurb: "Everything not covered by a domain above.",
    members: [], // heuristic fallback
  },
];

// Map a class/interface name to a domain title when it isn't curated. Every
// return value must be an ATLAS_DOMAINS title; callers route unknown titles to
// "Other" defensively.
function heuristicDomain(name: string): string {
  if (name.startsWith("Bases")) return "Bases";
  if (name.endsWith("Component")) return "Settings & UI components";
  if (name.startsWith("Setting")) return "Settings & UI components";
  if (name.endsWith("Modal")) return "Modals & suggesters";
  if (name.endsWith("Suggest") || name.endsWith("Suggester")) return "Modals & suggesters";
  if (name.endsWith("View")) return "Workspace & views";
  if (name.startsWith("Workspace")) return "Workspace & views";
  if (name.endsWith("Cache")) return "Metadata cache";
  if (name.startsWith("Markdown")) return "Editor & Markdown rendering";
  if (name.includes("Editor")) return "Editor & Markdown rendering";
  if (name.startsWith("Keymap")) return "Events & keymap";
  return "Other";
}

// --- Types ---

interface DocEntry {
  name: string;
  kind: string;
  content: string;
}

// --- Helpers ---

function getJSDocText(node: Node): string {
  const jsDocs = (node as any).getJsDocs?.() as JSDoc[] | undefined;
  if (!jsDocs || jsDocs.length === 0) return "";
  // Take the last JSDoc block (closest to the declaration)
  const doc = jsDocs[jsDocs.length - 1];
  const comment = doc.getCommentText();
  return comment?.trim() ?? "";
}

function getFirstLineJSDoc(node: Node): string {
  const text = getJSDocText(node);
  if (!text) return "";
  const firstLine = text.split("\n")[0].trim();
  return firstLine;
}

function formatTypeParams(node: { getTypeParameters(): TypeParameterDeclaration[] }): string {
  const params = node.getTypeParameters();
  if (params.length === 0) return "";
  const parts = params.map(p => {
    const constraint = p.getConstraint();
    const def = p.getDefault();
    let s = p.getName();
    if (constraint) s += ` extends ${constraint.getText()}`;
    if (def) s += ` = ${def.getText()}`;
    return s;
  });
  return `<${parts.join(", ")}>`;
}

function formatSignature(
  name: string,
  params: ParameterDeclaration[],
  returnType: string | undefined,
  typeParams: string
): string {
  const paramParts = params.map(p => {
    const optional = p.isOptional() ? "?" : "";
    const rest = p.isRestParameter() ? "..." : "";
    const typeText = p.getTypeNode()?.getText() ?? p.getType().getText();
    return `${rest}${p.getName()}${optional}: ${typeText}`;
  });
  const ret = returnType ? `: ${returnType}` : "";
  return `${name}${typeParams}(${paramParts.join(", ")})${ret}`;
}

function escapeForTable(s: string): string {
  return s.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

// --- Extraction ---

function extractProperties(
  members: (PropertyDeclaration | PropertySignature)[]
): string {
  const props = members.filter(p => {
    // Skip private/protected
    const modifiers = p.getModifiers?.() ?? [];
    return !modifiers.some(m =>
      m.getKind() === SyntaxKind.PrivateKeyword ||
      m.getKind() === SyntaxKind.ProtectedKeyword
    );
  });

  if (props.length === 0) return "";

  const lines: string[] = ["## Properties", "", "| Name | Type | Description |", "|------|------|-------------|"];

  for (const prop of props) {
    const name = prop.getName();
    const typeText = prop.getTypeNode()?.getText() ?? prop.getType().getText();
    const desc = getFirstLineJSDoc(prop);
    lines.push(`| \`${escapeForTable(name)}\` | \`${escapeForTable(typeText)}\` | ${escapeForTable(desc)} |`);
  }

  return lines.join("\n");
}

type MethodLike = MethodDeclaration | MethodSignature;

function extractMethods(members: MethodLike[]): string {
  const methods = members.filter(m => {
    const modifiers = m.getModifiers?.() ?? [];
    return !modifiers.some(mod =>
      mod.getKind() === SyntaxKind.PrivateKeyword ||
      mod.getKind() === SyntaxKind.ProtectedKeyword
    );
  });

  if (methods.length === 0) return "";

  // Group overloads by name
  const grouped = new Map<string, MethodLike[]>();
  for (const m of methods) {
    const name = m.getName();
    if (!grouped.has(name)) grouped.set(name, []);
    grouped.get(name)!.push(m);
  }

  const lines: string[] = ["## Methods"];

  for (const [name, overloads] of grouped) {
    // Check if this is an event-registration method pattern (on/off/trigger)
    const isEventMethod = (name === "on" || name === "off" || name === "trigger") && overloads.length > 2;

    if (isEventMethod) {
      // Collected in extractEvents instead
      continue;
    }

    lines.push("", `### ${name}`, "", "```ts");
    for (const m of overloads) {
      const typeParams = formatTypeParams(m);
      const returnType = m.getReturnTypeNode()?.getText();
      const sig = formatSignature(name, m.getParameters(), returnType, typeParams);
      lines.push(sig);
    }
    lines.push("```");

    // Use JSDoc from the last overload (or implementation)
    const desc = getJSDocText(overloads[overloads.length - 1]);
    if (desc) {
      lines.push("", desc);
    }
  }

  // Remove trailing empty "## Methods" if all methods were event methods
  if (lines.length === 1) return "";

  return lines.join("\n");
}

function extractEvents(members: MethodLike[]): string {
  // Look for `on(name: 'eventName', callback: (...) => any, ...): EventRef` overloads
  const onMethods = members.filter(m => m.getName() === "on");
  if (onMethods.length <= 2) return ""; // Not enough to be an event pattern

  const events: { name: string; signature: string; desc: string }[] = [];

  for (const m of onMethods) {
    const params = m.getParameters();
    if (params.length < 2) continue;

    // Check if first param is a string literal type
    const firstParam = params[0];
    const typeNode = firstParam.getTypeNode();
    if (!typeNode) continue;
    const typeText = typeNode.getText();

    // String literal types look like: 'create' or 'modify'
    if (!typeText.startsWith("'") && !typeText.startsWith('"')) continue;

    const eventName = typeText.replace(/['"]/g, "");
    const callbackParam = params[1];
    const callbackType = callbackParam.getTypeNode()?.getText() ?? callbackParam.getType().getText();
    const desc = getJSDocText(m);

    events.push({
      name: eventName,
      signature: callbackType,
      desc,
    });
  }

  if (events.length === 0) return "";

  const lines: string[] = ["## Events", "", "| Event | Callback | Description |", "|-------|----------|-------------|"];

  for (const e of events) {
    lines.push(`| \`${escapeForTable(e.name)}\` | \`${escapeForTable(e.signature)}\` | ${escapeForTable(e.desc)} |`);
  }

  return lines.join("\n");
}

// --- Generators ---

function generateClassDoc(cls: ClassDeclaration, childMap: Map<string, string[]>): DocEntry | null {
  const name = cls.getName();
  if (!name) return null;

  const lines: string[] = [`# ${name}`];
  const typeParams = formatTypeParams(cls);
  if (typeParams) lines[0] += typeParams;

  const desc = getFirstLineJSDoc(cls);
  if (desc) lines.push("", `> ${desc}`);

  // Heritage
  const ext = cls.getExtends();
  if (ext) {
    lines.push("", `Extends: \`${ext.getText()}\``);
  }

  const impls = cls.getImplements();
  if (impls.length > 0) {
    lines.push(`Implements: ${impls.map(i => `\`${i.getText()}\``).join(", ")}`);
  }

  const children = childMap.get(name);
  if (children && children.length > 0) {
    lines.push(`Extended by: ${children.map(c => `\`${c}\``).join(", ")}`);
  }

  // Abstract?
  if (cls.isAbstract()) {
    lines.push("", "*Abstract class*");
  }

  // Properties
  const props = extractProperties([...cls.getProperties()]);
  if (props) lines.push("", props);

  // Methods
  const allMethods = [...cls.getMethods()];
  const methods = extractMethods(allMethods);
  if (methods) lines.push("", methods);

  // Events
  const events = extractEvents(allMethods);
  if (events) lines.push("", events);

  return { name, kind: "class", content: lines.join("\n") + "\n" };
}

function generateInterfaceDoc(iface: InterfaceDeclaration, childMap: Map<string, string[]>): DocEntry {
  const name = iface.getName();
  const lines: string[] = [`# ${name}`];
  const typeParams = formatTypeParams(iface);
  if (typeParams) lines[0] += typeParams;

  const desc = getFirstLineJSDoc(iface);
  if (desc) lines.push("", `> ${desc}`);

  // Heritage
  const exts = iface.getExtends();
  if (exts.length > 0) {
    lines.push("", `Extends: ${exts.map(e => `\`${e.getText()}\``).join(", ")}`);
  }

  const children = childMap.get(name);
  if (children && children.length > 0) {
    lines.push(`Extended by: ${children.map(c => `\`${c}\``).join(", ")}`);
  }

  // Properties
  const props = extractProperties([...iface.getProperties()]);
  if (props) lines.push("", props);

  // Methods
  const allMethods = [...iface.getMethods()];
  const methods = extractMethods(allMethods);
  if (methods) lines.push("", methods);

  // Events
  const events = extractEvents(allMethods);
  if (events) lines.push("", events);

  return { name, kind: "interface", content: lines.join("\n") + "\n" };
}

function generateEnumDoc(en: EnumDeclaration): DocEntry {
  const name = en.getName();
  const lines: string[] = [`# ${name}`];

  const desc = getFirstLineJSDoc(en);
  if (desc) lines.push("", `> ${desc}`);

  lines.push("", "## Members", "");

  const members = en.getMembers();
  for (const m of members) {
    const val = m.getValue();
    const memberDesc = getFirstLineJSDoc(m);
    const valStr = val !== undefined ? ` = ${JSON.stringify(val)}` : "";
    lines.push(`- \`${m.getName()}${valStr}\`${memberDesc ? ` — ${memberDesc}` : ""}`);
  }

  return { name, kind: "enum", content: lines.join("\n") + "\n" };
}

function generateTypeAliasDoc(ta: TypeAliasDeclaration): DocEntry {
  const name = ta.getName();
  const lines: string[] = [`# ${name}`];

  const desc = getFirstLineJSDoc(ta);
  if (desc) lines.push("", `> ${desc}`);

  const typeParams = formatTypeParams(ta);
  const typeText = ta.getTypeNode()?.getText() ?? ta.getType().getText();
  lines.push("", "```ts", `type ${name}${typeParams} = ${typeText}`, "```");

  return { name, kind: "type", content: lines.join("\n") + "\n" };
}

// --- Atlas ---

// Auto-derived inheritance forest: roots are parents that aren't themselves
// children. Only trees with >= 3 nodes are shown; a global visited set keeps
// each node to a single appearance (interfaces can have multiple parents).
function buildInheritanceTrees(childMap: Map<string, string[]>, existingNames: Set<string>): string {
  const childOf = new Set<string>();
  for (const kids of childMap.values()) for (const k of kids) childOf.add(k);
  const roots = [...childMap.keys()].filter(p => !childOf.has(p));

  const size = (name: string, seen = new Set<string>()): number => {
    if (seen.has(name)) return 0;
    seen.add(name);
    let n = 1;
    for (const k of childMap.get(name) ?? []) n += size(k, seen);
    return n;
  };

  const meaningful = roots
    .map(r => ({ r, n: size(r) }))
    .filter(x => x.n >= 3)
    .sort((a, b) => b.n - a.n || a.r.localeCompare(b.r))
    .map(x => x.r);

  if (meaningful.length === 0) return "";

  const visited = new Set<string>();
  const lines: string[] = ["## Inheritance trees", "", "Hierarchies derived from `extends`/`implements` (a node's children derive from it)."];

  const render = (name: string, depth: number) => {
    if (visited.has(name)) return;
    visited.add(name);
    const indent = "  ".repeat(depth);
    const link = existingNames.has(name) ? `[${name}](${name}.md)` : `\`${name}\``;
    lines.push(`${indent}- ${link}`);
    for (const k of (childMap.get(name) ?? []).slice().sort((a, b) => a.localeCompare(b))) render(k, depth + 1);
  };

  for (const root of meaningful) {
    lines.push("");
    render(root, 0);
  }

  return lines.join("\n");
}

function generateAtlas(
  entries: DocEntry[],
  childMap: Map<string, string[]>,
  sourceFile: SourceFile
): string {
  const existingNames = new Set(entries.filter(e => !e.name.startsWith("_")).map(e => e.name));
  const kindByName = new Map(entries.map(e => [e.name, e.kind] as const));
  const knownTitles = new Set(ATLAS_DOMAINS.map(d => d.title));

  // Assign each entry to exactly one domain: curated first, then heuristic.
  const domainOf = new Map<string, string>();
  for (const d of ATLAS_DOMAINS) {
    for (const m of d.members) {
      if (existingNames.has(m) && !domainOf.has(m)) domainOf.set(m, d.title);
    }
  }
  for (const name of existingNames) {
    if (domainOf.has(name)) continue;
    const dom = heuristicDomain(name);
    domainOf.set(name, knownTitles.has(dom) ? dom : "Other");
  }

  const byDomain = new Map<string, string[]>();
  for (const [name, dom] of domainOf) {
    if (!byDomain.has(dom)) byDomain.set(dom, []);
    byDomain.get(dom)!.push(name);
  }

  const lines: string[] = [
    "# API Atlas",
    "",
    "Orientation map for the Obsidian API: classes and interfaces grouped by what",
    "they're for, followed by the main inheritance trees. Find the right area here,",
    "then open `<Name>.md` for the full surface. For the exhaustive alphabetical",
    "listing see `_common.md` and `_other.md`.",
  ];

  const entryLine = (name: string): string => {
    const desc = getDescriptionForIndex(sourceFile, name) || kindByName.get(name) || "";
    return `- [${name}](${name}.md)${desc ? ` — ${desc}` : ""}`;
  };

  for (const d of ATLAS_DOMAINS) {
    const names = byDomain.get(d.title);
    if (!names || names.length === 0) continue;
    const curatedHere = d.members.filter(m => names.includes(m));
    const rest = names.filter(n => !d.members.includes(n)).sort((a, b) => a.localeCompare(b));
    lines.push("", `## ${d.title}`, "", d.blurb, "");
    for (const name of [...curatedHere, ...rest]) lines.push(entryLine(name));
  }

  const trees = buildInheritanceTrees(childMap, existingNames);
  if (trees) lines.push("", trees);

  return lines.join("\n") + "\n";
}

// --- Main ---

function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Usage: tsx convert.ts <path-to-obsidian.d.ts> <output-dir>");
    process.exit(1);
  }

  const inputPath = path.resolve(args[0]);
  const outputDir = path.resolve(args[1]);

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(1);
  }

  // Ensure output directory exists and is clean
  if (fs.existsSync(outputDir)) {
    const existing = fs.readdirSync(outputDir).filter(f => f.endsWith(".md"));
    for (const f of existing) {
      fs.unlinkSync(path.join(outputDir, f));
    }
  } else {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const project = new Project({
    compilerOptions: { strict: true },
    skipAddingFilesFromTsConfig: true,
  });

  const sourceFile = project.addSourceFileAtPath(inputPath);

  // Build child map (parent name -> child names) for "Extended by" info
  const childMap = new Map<string, string[]>();
  const allClasses = sourceFile.getClasses();
  const allInterfaces = sourceFile.getInterfaces();

  for (const cls of allClasses) {
    const ext = cls.getExtends();
    if (ext) {
      const parentName = ext.getExpression().getText();
      if (!childMap.has(parentName)) childMap.set(parentName, []);
      childMap.get(parentName)!.push(cls.getName() ?? "");
    }
  }

  for (const iface of allInterfaces) {
    for (const ext of iface.getExtends()) {
      const parentName = ext.getExpression().getText();
      if (!childMap.has(parentName)) childMap.set(parentName, []);
      childMap.get(parentName)!.push(iface.getName());
    }
  }

  const entries: DocEntry[] = [];

  // Classes
  for (const cls of allClasses) {
    if (!cls.isExported()) continue;
    const entry = generateClassDoc(cls, childMap);
    if (entry) entries.push(entry);
  }

  // Interfaces
  for (const iface of allInterfaces) {
    if (!iface.isExported()) continue;
    entries.push(generateInterfaceDoc(iface, childMap));
  }

  // Enums
  for (const en of sourceFile.getEnums()) {
    if (!en.isExported()) continue;
    entries.push(generateEnumDoc(en));
  }

  // Type aliases
  for (const ta of sourceFile.getTypeAliases()) {
    if (!ta.isExported()) continue;
    entries.push(generateTypeAliasDoc(ta));
  }

  // Standalone functions -> _functions.md
  const funcs = sourceFile.getFunctions().filter(f => f.isExported());
  if (funcs.length > 0) {
    const lines: string[] = ["# Functions", "", "Standalone functions exported by the Obsidian API.", ""];

    for (const fn of funcs) {
      const name = fn.getName() ?? "anonymous";
      const typeParams = formatTypeParams(fn);
      const returnType = fn.getReturnTypeNode()?.getText();
      const sig = formatSignature(name, fn.getParameters(), returnType, typeParams);
      const desc = getJSDocText(fn);

      lines.push(`## ${name}`, "", "```ts", sig, "```");
      if (desc) lines.push("", desc);
      lines.push("");
    }

    entries.push({ name: "_functions", kind: "functions", content: lines.join("\n") });
  }

  // Write files
  for (const entry of entries) {
    const filePath = path.join(outputDir, `${entry.name}.md`);
    fs.writeFileSync(filePath, entry.content, "utf-8");
  }

  // Write index files
  const common: DocEntry[] = [];
  const other: DocEntry[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith("_")) continue; // skip _functions
    if (COMMON_NAMES.has(entry.name)) {
      common.push(entry);
    } else {
      other.push(entry);
    }
  }

  common.sort((a, b) => a.name.localeCompare(b.name));
  other.sort((a, b) => a.name.localeCompare(b.name));

  const commonLines = ["# Common API", "", "Core classes and interfaces used in most Obsidian plugins.", "See `_atlas.md` for a domain-grouped map of the full API.", ""];
  for (const e of common) {
    const desc = getDescriptionForIndex(sourceFile, e.name);
    commonLines.push(`- [${e.name}](${e.name}.md) — ${desc || e.kind}`);
  }
  fs.writeFileSync(path.join(outputDir, "_common.md"), commonLines.join("\n") + "\n", "utf-8");

  const otherLines = ["# Other API", "", "Additional classes, interfaces, types, enums, and type aliases.", ""];
  for (const e of other) {
    const desc = getDescriptionForIndex(sourceFile, e.name);
    otherLines.push(`- [${e.name}](${e.name}.md) — ${desc || e.kind}`);
  }
  otherLines.push("", `- [Functions](_functions.md) — Standalone utility functions`);
  fs.writeFileSync(path.join(outputDir, "_other.md"), otherLines.join("\n") + "\n", "utf-8");

  // Atlas: domain-grouped orientation map + inheritance trees
  fs.writeFileSync(path.join(outputDir, "_atlas.md"), generateAtlas(entries, childMap, sourceFile), "utf-8");

  // Stats
  const classCount = entries.filter(e => e.kind === "class").length;
  const ifaceCount = entries.filter(e => e.kind === "interface").length;
  const enumCount = entries.filter(e => e.kind === "enum").length;
  const typeCount = entries.filter(e => e.kind === "type").length;
  const total = entries.length;

  console.log(`Generated ${total} files:`);
  console.log(`  ${classCount} classes, ${ifaceCount} interfaces, ${enumCount} enums, ${typeCount} type aliases`);
  console.log(`  ${common.length} common, ${other.length - (funcs.length > 0 ? 0 : 0)} other`);
  if (funcs.length > 0) console.log(`  ${funcs.length} standalone functions in _functions.md`);
  console.log(`  Index files: _common.md, _other.md, _atlas.md`);
}

function getDescriptionForIndex(sourceFile: SourceFile, name: string): string {
  const cls = sourceFile.getClass(name);
  if (cls) return getFirstLineJSDoc(cls);

  const iface = sourceFile.getInterface(name);
  if (iface) return getFirstLineJSDoc(iface);

  const en = sourceFile.getEnum(name);
  if (en) return getFirstLineJSDoc(en);

  const ta = sourceFile.getTypeAlias(name);
  if (ta) return getFirstLineJSDoc(ta);

  return "";
}

main();
