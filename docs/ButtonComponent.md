# ButtonComponent

Extends: `BaseComponent`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `buttonEl` | `HTMLButtonElement` |  |

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this
```

### setCta

```ts
setCta(): this
```

### removeCta

```ts
removeCta(): this
```

### setWarning

```ts
setWarning(): this
```

### setTooltip

```ts
setTooltip(tooltip: string, options?: TooltipOptions): this
```

### setButtonText

```ts
setButtonText(name: string): this
```

### setIcon

```ts
setIcon(icon: IconName): this
```

### setClass

```ts
setClass(cls: string): this
```

### onClick

```ts
onClick(callback: (evt: MouseEvent) => unknown | Promise<unknown>): this
```
