# DurationValue

> {@link Value} wrapping a duration. Durations can be used to modify a {@link DateValue} or can

Extends: `NotNullValue`

## Methods

### toString

```ts
toString(): string
```

### isTruthy

```ts
isTruthy(): boolean
```

### addToDate

```ts
addToDate(value: DateValue, subtract?: boolean): DateValue
```

Modifies the provided {@DateValue} by this duration.

### getMilliseconds

```ts
getMilliseconds(): number
```

Convert this duration into milliseconds.

### parseFromString

```ts
parseFromString(input: string): DurationValue | null
```

Create a new DurationValue using an ISO 8601 duration.
See {@link https://en.wikipedia.org/wiki/ISO_8601#Durations} for duration format details.

### fromMilliseconds

```ts
fromMilliseconds(milliseconds: number): DurationValue
```

Create a new DurationValue from milliseconds.
