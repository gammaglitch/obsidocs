# ListValue

> {@link Value} wrapping an array of Values. Values do not all need to be of the same type.

Extends: `NotNullValue`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `string` |  |

## Methods

### toString

```ts
toString(): string
```

### isTruthy

```ts
isTruthy(): boolean
```

### includes

```ts
includes(value: Value): boolean
```

### length

```ts
length(): number
```

### get

```ts
get(index: number): Value
```

### concat

```ts
concat(other: ListValue): ListValue
```
