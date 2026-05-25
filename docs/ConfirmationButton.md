# ConfirmationButton

> A button inside a {@link ConfirmationModal}'s button row. Clicking the button

Extends: `ButtonComponent`

## Methods

### onClick

```ts
onClick(handler: (evt: MouseEvent) => unknown | Promise<unknown>): this
```

### setInitialFocus

```ts
setInitialFocus(): this
```

Mark this button as the focus target when the modal opens. If multiple
buttons in the same modal have this set, the last-marked one wins.

### setSecondary

```ts
setSecondary(): this
```

Place the button separately from the main button group (e.g. for a
tertiary action that shouldn't sit next to the primary/cancel pair).

### setCancel

```ts
setCancel(): this
```

Style the button as the dismissal action.
