# ConfirmationModal

> A modal that asks the user to confirm an action. Use {@link addButton} to add

Extends: `Modal`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `buttonContainerEl` | `HTMLElement` |  |

## Methods

### addClass

```ts
addClass(cls: string): this
```

### addCheckbox

```ts
addCheckbox(label: string, cb: (value: boolean) => any | Promise<any>): this
```

### addButton

```ts
addButton(cb: (btn: ConfirmationButton) => any): this
```

### addCancelButton

```ts
addCancelButton(text?: string): this
```
