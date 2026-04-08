# MarkdownPreviewRenderer

## Methods

### registerPostProcessor

```ts
registerPostProcessor(postProcessor: MarkdownPostProcessor, sortOrder?: number): void
```

### unregisterPostProcessor

```ts
unregisterPostProcessor(postProcessor: MarkdownPostProcessor): void
```

### createCodeBlockPostProcessor

```ts
createCodeBlockPostProcessor(language: string, handler: (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<any> | void): (el: HTMLElement, ctx: MarkdownPostProcessorContext) => void
```
