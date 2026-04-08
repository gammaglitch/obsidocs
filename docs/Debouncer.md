# Debouncer<T extends unknown[], V>

## Methods

### cancel

```ts
cancel(): this
```

Cancel any pending debounced function call.

### run

```ts
run(): V | void
```

If there is any pending function call, clear the timer and call the function immediately.
