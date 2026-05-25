# Modal
Implements: `CloseableComponent`
Extended by: `ConfirmationModal`, `SuggestModal`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `app` | `App` |  |
| `scope` | `Scope` |  |
| `containerEl` | `HTMLElement` |  |
| `modalEl` | `HTMLElement` |  |
| `titleEl` | `HTMLElement` |  |
| `contentEl` | `HTMLElement` |  |
| `shouldRestoreSelection` | `boolean` |  |

## Methods

### open

```ts
open(): void
```

Show the modal on the active window. On phones, the modal will animate on screen.

### close

```ts
close(): void
```

Hide the modal.

### onOpen

```ts
onOpen(): Promise<void> | void
```

### onClose

```ts
onClose(): void
```

### setTitle

```ts
setTitle(title: string): this
```

### setContent

```ts
setContent(content: string | DocumentFragment): this
```

### setCloseCallback

```ts
setCloseCallback(callback: () => any): this
```
