# MarkdownPostProcessorContext

## Properties

| Name | Type | Description |
|------|------|-------------|
| `docId` | `string` |  |
| `sourcePath` | `string` | The path to the associated file. Any links are assumed to be relative to the `sourcePath`. |
| `frontmatter` | `any \| null \| undefined` |  |

## Methods

### addChild

```ts
addChild(child: MarkdownRenderChild): void
```

Adds a child component that will have its lifecycle managed by the renderer.

Use this to add a dependent child to the renderer such that if the containerEl
of the child is ever removed, the component's unload will be called.

### getSectionInfo

```ts
getSectionInfo(el: HTMLElement): MarkdownSectionInformation | null
```

Gets the section information of this element at this point in time.
Only call this function right before you need this information to get the most up-to-date version.
This function may also return null in many circumstances; if you use it, you must be prepared to deal with nulls.
