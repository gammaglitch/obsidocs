# SuggestModal<T>

Extends: `Modal`
Implements: `ISuggestOwner<T>`
Extended by: `FuzzySuggestModal`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `limit` | `number` |  |
| `emptyStateText` | `string` |  |
| `inputEl` | `HTMLInputElement` |  |
| `resultContainerEl` | `HTMLElement` |  |

## Methods

### setPlaceholder

```ts
setPlaceholder(placeholder: string): void
```

### setInstructions

```ts
setInstructions(instructions: Instruction[]): void
```

### onNoSuggestion

```ts
onNoSuggestion(): void
```

### selectSuggestion

```ts
selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void
```

### selectActiveSuggestion

```ts
selectActiveSuggestion(evt: MouseEvent | KeyboardEvent): void
```

### getSuggestions

```ts
getSuggestions(query: string): T[] | Promise<T[]>
```

### renderSuggestion

```ts
renderSuggestion(value: T, el: HTMLElement): void
```

### onChooseSuggestion

```ts
onChooseSuggestion(item: T, evt: MouseEvent | KeyboardEvent): void
```
