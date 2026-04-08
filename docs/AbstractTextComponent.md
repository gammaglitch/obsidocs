# AbstractTextComponent<T extends HTMLInputElement | HTMLTextAreaElement>

Extends: `ValueComponent<string>`
Extended by: `SearchComponent`, `TextAreaComponent`, `TextComponent`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `inputEl` | `T` |  |

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this
```

### getValue

```ts
getValue(): string
```

### setValue

```ts
setValue(value: string): this
```

### setPlaceholder

```ts
setPlaceholder(placeholder: string): this
```

### onChanged

```ts
onChanged(): void
```

### onChange

```ts
onChange(callback: (value: string) => any): this
```
