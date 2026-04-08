# View

Extends: `Component`
Extended by: `ItemView`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `app` | `App` |  |
| `icon` | `IconName` |  |
| `navigation` | `boolean` | Whether or not the view is intended for navigation. |
| `leaf` | `WorkspaceLeaf` |  |
| `containerEl` | `HTMLElement` |  |
| `scope` | `Scope \| null` | Assign an optional scope to your view to register hotkeys for when the view |

## Methods

### getViewType

```ts
getViewType(): string
```

### getState

```ts
getState(): Record<string, unknown>
```

### setState

```ts
setState(state: unknown, result: ViewStateResult): Promise<void>
```

### getEphemeralState

```ts
getEphemeralState(): Record<string, unknown>
```

### setEphemeralState

```ts
setEphemeralState(state: unknown): void
```

### getIcon

```ts
getIcon(): IconName
```

### onResize

```ts
onResize(): void
```

Called when the size of this view is changed.

### getDisplayText

```ts
getDisplayText(): string
```

### onPaneMenu

```ts
onPaneMenu(menu: Menu, source: 'more-options' | 'tab-header' | string): void
```

Populates the pane menu.

(Replaces the previously removed `onHeaderMenu` and `onMoreOptionsMenu`)
