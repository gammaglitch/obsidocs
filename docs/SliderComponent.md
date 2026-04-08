# SliderComponent

Extends: `ValueComponent<number>`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `sliderEl` | `HTMLInputElement` |  |

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this
```

### setInstant

```ts
setInstant(instant: boolean): this
```

### setLimits

```ts
setLimits(min: number | null, max: number | null, step: number | 'any'): this
```

### getValue

```ts
getValue(): number
```

### setValue

```ts
setValue(value: number): this
```

### getValuePretty

```ts
getValuePretty(): string
```

### setDynamicTooltip

```ts
setDynamicTooltip(): this
```

### showTooltip

```ts
showTooltip(): void
```

### onChange

```ts
onChange(callback: (value: number) => any): this
```
