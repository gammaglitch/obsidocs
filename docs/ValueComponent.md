# ValueComponent<T>

Extends: `BaseComponent`
Extended by: `AbstractTextComponent`, `ColorComponent`, `DropdownComponent`, `ProgressBarComponent`, `SliderComponent`, `ToggleComponent`

*Abstract class*

## Methods

### registerOptionListener

```ts
registerOptionListener(listeners: Record<string, (value?: T) => T>, key: string): this
```

### getValue

```ts
getValue(): T
```

### setValue

```ts
setValue(value: T): this
```
