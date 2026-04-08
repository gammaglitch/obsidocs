# Scope

> A scope receives keyboard events and binds callbacks to given hotkeys.

## Methods

### register

```ts
register(modifiers: Modifier[] | null, key: string | null, func: KeymapEventListener): KeymapEventHandler
```

Add a keymap event handler to this scope.

### unregister

```ts
unregister(handler: KeymapEventHandler): void
```

Remove an existing keymap event handler.
