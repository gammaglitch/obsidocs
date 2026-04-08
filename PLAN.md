# obsidocs

Convert Obsidian's `obsidian.d.ts` into per-class/interface markdown files for use as a Claude skill reference.

## Goal

A self-contained repo that:

1. Fetches `obsidian.d.ts` from `obsidianmd/obsidian-api`
2. Runs a converter that splits it into one markdown file per class/interface
3. Commits the output via GitHub Action on new upstream tags or manual trigger
4. Produces a ready-to-consume `docs/` directory that obsigen's `obs-api` skill reads directly

## Output structure

```
obsidocs/
  converter/           # the conversion tooling
    convert.ts         # TypeScript converter using ts-morph
    tsconfig.json
    package.json
  docs/                # generated output (committed)
    _common.md         # index of ~30 core plugin-dev classes
    _other.md          # index of everything else
    Plugin.md
    Vault.md
    Workspace.md
    ...
  .github/
    workflows/
      update-docs.yml  # GH Action: fetch upstream, convert, commit
  PLAN.md
  README.md
```

## Per-file format

Each generated markdown file covers one class or interface:

```md
# ClassName

> One-line JSDoc description if available.

Extends: `ParentClass`
Extended by: `ChildA`, `ChildB`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `app` | `App` | Reference to the app instance. |

## Methods

### methodName

\`\`\`ts
methodName(param: Type, optional?: Type): ReturnType
\`\`\`

Description from JSDoc.

## Events

If the class has `on()`-style event registration, list the event names, callback signatures, and descriptions.
```

Design decisions:

- **No frontmatter.** The skill navigates via index files, not metadata queries.
- **No wikilinks.** Cross-references are plain text ("see `Workspace`"). The agent knows how to find files.
- **No tutorials or patterns.** This is pure API surface. Usage patterns go in a handwritten `patterns.md` inside the obsigen skill.
- **Token-efficient.** Skip descriptions that just restate the type signature. Omit empty sections.

## Index files

`_common.md` — the ~30 classes/interfaces hit in nearly every plugin:

```
Plugin, Component, App, Vault, Workspace, MetadataCache,
TFile, TFolder, TAbstractFile, FileManager,
MarkdownView, ItemView, View, WorkspaceLeaf,
Editor, MarkdownRenderer, MarkdownPostProcessor,
Setting, PluginSettingTab, Modal, Notice, Menu, MenuItem,
Command, EventRef, Events, Keymap,
FuzzySuggestModal, SuggestModal,
HoverPopover, FileSystemAdapter
```

One line per entry: `- [ClassName](ClassName.md) — one-line description`

`_other.md` — everything else, same format.

## Converter

**Language:** TypeScript with `ts-morph` (AST-level access to the `.d.ts`).

**Why ts-morph:** The input is a TypeScript declaration file. `ts-morph` wraps the TypeScript compiler API and gives direct access to classes, interfaces, methods, properties, JSDoc comments, heritage clauses, and type signatures — no regex parsing needed.

**What it does:**

1. Load `obsidian.d.ts` as a source file
2. Walk all exported classes, interfaces, enums, type aliases, and standalone functions
3. For each class/interface:
   - Extract name, JSDoc description, heritage (extends/implements)
   - Extract properties with name, type text, JSDoc
   - Extract methods with full signature, parameter details, return type, JSDoc
   - Extract event patterns (if the class has `on()` overloads)
   - Detect which classes extend it (reverse lookup)
4. Write one `.md` file per class/interface into `docs/`
5. Classify into common vs other and write the two index files
6. Report stats: how many files generated, any warnings

**Enums and type aliases** get their own files too, same directory.

**Standalone functions** (if any at module level) go into a `_functions.md` file.

## Versioning

Tags on main, derived from upstream's `package.json` version.

**How it works:**

1. GH Action fetches both `obsidian.d.ts` and `package.json` from `obsidianmd/obsidian-api`
2. Reads the version string (e.g., `1.8.0`)
3. Checks if tag `v1.8.0` already exists — if yes, skip (idempotent)
4. Runs the converter
5. Commits with message `docs: update to v1.8.0`
6. Tags the commit `v1.8.0`
7. Pushes commit + tag

**What this gives us:**

- `git diff v1.7.2..v1.7.3 -- docs/` shows exactly what changed between Obsidian API versions
- obsigen can pin to a tag matching a plugin's `minAppVersion`
- Reproducible: any tag can be checked out to get the exact docs for that API version

No branches, no release assets. Just tags on main.

## GitHub Action

```yaml
name: Update API Docs
on:
  schedule:
    - cron: '0 6 * * 1'  # weekly Monday 6am UTC
  workflow_dispatch:       # manual trigger

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-tags: true
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - name: Fetch upstream files
        run: |
          curl -fSL -o obsidian.d.ts \
            https://raw.githubusercontent.com/obsidianmd/obsidian-api/master/obsidian.d.ts
          curl -fSL -o upstream-package.json \
            https://raw.githubusercontent.com/obsidianmd/obsidian-api/master/package.json
      - name: Check version
        id: version
        run: |
          VERSION=$(node -p "require('./upstream-package.json').version")
          echo "version=$VERSION" >> "$GITHUB_OUTPUT"
          if git tag -l "v$VERSION" | grep -q .; then
            echo "skip=true" >> "$GITHUB_OUTPUT"
          else
            echo "skip=false" >> "$GITHUB_OUTPUT"
          fi
      - name: Install and convert
        if: steps.version.outputs.skip == 'false'
        run: |
          cd converter
          npm ci
          npx tsx convert.ts ../obsidian.d.ts ../docs
      - name: Commit and tag
        if: steps.version.outputs.skip == 'false'
        run: |
          VERSION=${{ steps.version.outputs.version }}
          git add docs/
          git diff --cached --quiet && exit 0
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git commit -m "docs: update to v${VERSION}"
          git tag "v${VERSION}"
          git push
          git push --tags
```

## How obsigen consumes this

obsigen's `obs-api` skill:

- `ensure_obs_api.sh` does a shallow clone or pull of `obsidocs` into the skill's `doc_api/` directory
- Or: `publish.sh` vendors the `docs/` directory at publish time so workspaces are fully offline
- The skill SKILL.md points at the `doc_api/` files, same lookup pattern as godot-api

## Task list

- [ ] Init repo with converter/package.json (ts-morph, tsx)
- [ ] Write the converter (converter/convert.ts)
- [ ] Test locally: fetch obsidian.d.ts, run converter, inspect output
- [ ] Write _common.md and _other.md generation logic with curated common list
- [ ] Set up GH Action workflow
- [ ] Generate initial docs/ commit
- [ ] Write README
