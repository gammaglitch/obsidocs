# ColorComponent

> Color picker component. Values are by default 6-digit hash-prefixed hex strings like `#000000`.

Extends: `ValueComponent<string>`

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this
```

### getValue

```ts
getValue(): HexString
```

### getValueRgb

```ts
getValueRgb(): RGB
```

### getValueHsl

```ts
getValueHsl(): HSL
```

### setValue

```ts
setValue(value: HexString): this
```

### setValueRgb

```ts
setValueRgb(rgb: RGB): this
```

### setValueHsl

```ts
setValueHsl(hsl: HSL): this
```

### onChange

```ts
onChange(callback: (value: string) => any): this
```
