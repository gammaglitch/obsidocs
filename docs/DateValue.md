# DateValue

> {@link Value} wrapping a Date.

Extends: `NotNullValue`
Extended by: `RelativeDateValue`

## Methods

### toString

```ts
toString(): string
```

### dateOnly

```ts
dateOnly(): DateValue
```

### relative

```ts
relative(): string
```

### isTruthy

```ts
isTruthy(): boolean
```

### parseFromString

```ts
parseFromString(input: string): DateValue | null
```

Create new DateValue from an input string.
