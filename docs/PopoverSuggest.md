# PopoverSuggest<T>

> Base class for adding a type-ahead popover.
Implements: `ISuggestOwner<T>`, `CloseableComponent`
Extended by: `AbstractInputSuggest`, `EditorSuggest`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `app` | `App` |  |
| `scope` | `Scope` |  |

## Methods

### open

```ts
open(): void
```

### close

```ts
close(): void
```

### renderSuggestion

```ts
renderSuggestion(value: T, el: HTMLElement): void
```

### selectSuggestion

```ts
selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void
```
