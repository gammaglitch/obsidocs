# Keymap

> Manages keymap lifecycle for different {@link Scope}s.

## Methods

### pushScope

```ts
pushScope(scope: Scope): void
```

Push a scope onto the scope stack, setting it as the active scope to handle all key events.

### popScope

```ts
popScope(scope: Scope): void
```

Remove a scope from the scope stack.
If the given scope is active, the next scope in the stack will be made active.

### isModifier

```ts
isModifier(evt: MouseEvent | TouchEvent | KeyboardEvent, modifier: Modifier): boolean
```

Checks whether the modifier key is pressed during this event.

### isModEvent

```ts
isModEvent(evt?: UserEvent | null): PaneType | boolean
```

Translates an event into the type of pane that should open.
Returns 'tab' if the modifier key Cmd/Ctrl is pressed OR if this is a middle-click MouseEvent.
Returns 'split' if Cmd/Ctrl+Alt is pressed.
Returns 'window' if Cmd/Ctrl+Alt+Shift is pressed.
