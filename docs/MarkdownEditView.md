# MarkdownEditView

> This is the editor for Obsidian Mobile as well as the WYSIWYG editor.
Implements: `MarkdownSubView`, `HoverParent`, `MarkdownFileInfo`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `app` | `App` |  |
| `hoverPopover` | `HoverPopover` |  |

## Methods

### clear

```ts
clear(): void
```

### get

```ts
get(): string
```

### set

```ts
set(data: string, clear: boolean): void
```

### getSelection

```ts
getSelection(): string
```

### getScroll

```ts
getScroll(): number
```

### applyScroll

```ts
applyScroll(scroll: number): void
```
