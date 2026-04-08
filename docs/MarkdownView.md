# MarkdownView

Extends: `TextFileView`
Implements: `MarkdownFileInfo`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `editor` | `Editor` |  |
| `previewMode` | `MarkdownPreviewView` |  |
| `currentMode` | `MarkdownSubView` |  |
| `hoverPopover` | `HoverPopover \| null` |  |

## Methods

### getViewType

```ts
getViewType(): string
```

### getMode

```ts
getMode(): MarkdownViewModeType
```

### getViewData

```ts
getViewData(): string
```

### clear

```ts
clear(): void
```

### setViewData

```ts
setViewData(data: string, clear: boolean): void
```

### showSearch

```ts
showSearch(replace?: boolean): void
```
