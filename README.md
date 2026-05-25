# obsidocs

Pre-built markdown API reference generated from Obsidian's `obsidian.d.ts`. One file per class/interface, ready to consume as a Claude skill reference or browse in any markdown viewer.

## What's in `docs/`

- One `.md` file per exported class, interface, enum, or type alias
- `_atlas.md` — orientation map: every class grouped by domain (files, workspace, editor, settings, …) plus the main inheritance trees
- `_common.md` — index of ~30 core plugin-dev classes
- `_other.md` — index of everything else
- `_functions.md` — standalone exported functions

## How it stays current

A [GitHub Action](.github/workflows/update-docs.yml) runs weekly and on manual trigger:

1. Fetches `obsidian.d.ts` and `package.json` from [obsidianmd/obsidian-api](https://github.com/obsidianmd/obsidian-api)
2. Checks if the upstream version already has a tag — skips if so
3. Runs the converter, commits the result, and tags it (e.g. `v1.8.0`)

`git diff v1.7.2..v1.7.3 -- docs/` shows exactly what changed between API versions.

## Local usage

```bash
# Fetch the declaration file
curl -fSL -o obsidian.d.ts \
  https://raw.githubusercontent.com/obsidianmd/obsidian-api/master/obsidian.d.ts

# Install and run
cd converter
bun install
bun run convert.ts ../obsidian.d.ts ../docs
```

## Consuming from obsigen

Clone or shallow-fetch this repo into the skill's `doc_api/` directory:

```bash
git clone --depth 1 https://github.com/youruser/obsidocs.git doc_api/
```

Or vendor `docs/` at publish time for fully offline workspaces.
