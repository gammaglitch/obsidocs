# Value

> Container type for data which can expose functions for retrieving, comparing, and rendering the data.
Extended by: `NotNullValue`, `NullValue`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `string` |  |

## Methods

### equals

```ts
equals(a: Value | null, b: Value | null): boolean
equals(other: this): boolean
```

### looseEquals

```ts
looseEquals(a: Value | null, b: Value | null): boolean
looseEquals(other: Value): boolean
```

### toString

```ts
toString(): string
```

### isTruthy

```ts
isTruthy(): boolean
```

### renderTo

```ts
renderTo(el: HTMLElement, ctx: RenderContext): void
```

Render this value into the provided HTMLElement.
