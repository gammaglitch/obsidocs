# AbstractInputSuggest<T>

> Attach to an `<input>` element or a `<div contentEditable>` to add type-ahead

Extends: `PopoverSuggest<T>`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `limit` | `number` | Limit to the number of elements rendered at once. Set to 0 to disable. Defaults to 100. |

## Methods

### setValue

```ts
setValue(value: string): void
```

Sets the value into the input element.

### getValue

```ts
getValue(): string
```

Gets the value from the input element.

### selectSuggestion

```ts
selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void
```

### onSelect

```ts
onSelect(callback: (value: T, evt: MouseEvent | KeyboardEvent) => any): this
```

Registers a callback to handle when a suggestion is selected by the user.
