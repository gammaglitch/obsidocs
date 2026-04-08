# WorkspaceLeaf

Extends: `WorkspaceItem`
Implements: `HoverParent`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `parent` | `WorkspaceTabs \| WorkspaceMobileDrawer` | The direct parent of the leaf. |
| `view` | `View` | The view associated with this leaf. Do not attempt to cast this to your |
| `hoverPopover` | `HoverPopover \| null` |  |

## Methods

### openFile

```ts
openFile(file: TFile, openState?: OpenViewState): Promise<void>
```

Open a file in this leaf.

### open

```ts
open(view: View): Promise<View>
```

### getViewState

```ts
getViewState(): ViewState
```

### setViewState

```ts
setViewState(viewState: ViewState, eState?: any): Promise<void>
```

### loadIfDeferred

```ts
loadIfDeferred(): Promise<void>
```

If this view is currently deferred, load it and await that it has fully loaded.

### getEphemeralState

```ts
getEphemeralState(): any
```

### setEphemeralState

```ts
setEphemeralState(state: any): void
```

### togglePinned

```ts
togglePinned(): void
```

### setPinned

```ts
setPinned(pinned: boolean): void
```

### setGroupMember

```ts
setGroupMember(other: WorkspaceLeaf): void
```

### setGroup

```ts
setGroup(group: string): void
```

### detach

```ts
detach(): void
```

### getIcon

```ts
getIcon(): IconName
```

### getDisplayText

```ts
getDisplayText(): string
```

### onResize

```ts
onResize(): void
```

### on

```ts
on(name: 'pinned-change', callback: (pinned: boolean) => any, ctx?: any): EventRef
on(name: 'group-change', callback: (group: string) => any, ctx?: any): EventRef
```
