# MarkdownRenderer

Extends: `MarkdownRenderChild`
Implements: `MarkdownPreviewEvents`, `HoverParent`
Extended by: `MarkdownPreviewView`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `app` | `App` |  |
| `hoverPopover` | `HoverPopover \| null` |  |

## Methods

### renderMarkdown

```ts
renderMarkdown(markdown: string, el: HTMLElement, sourcePath: string, component: Component): Promise<void>
```

Renders Markdown string to an HTML element.

### render

```ts
render(app: App, markdown: string, el: HTMLElement, sourcePath: string, component: Component): Promise<void>
```

Renders Markdown string to an HTML element.
