# Workspace

Extends: `Events`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `leftSplit` | `WorkspaceSidedock \| WorkspaceMobileDrawer` |  |
| `rightSplit` | `WorkspaceSidedock \| WorkspaceMobileDrawer` |  |
| `leftRibbon` | `WorkspaceRibbon` |  |
| `rightRibbon` | `WorkspaceRibbon` |  |
| `rootSplit` | `WorkspaceRoot` |  |
| `activeLeaf` | `WorkspaceLeaf \| null` | Indicates the currently focused leaf, if one exists. |
| `containerEl` | `HTMLElement` |  |
| `layoutReady` | `boolean` | If the layout of the app has been successfully initialized. |
| `requestSaveLayout` | `Debouncer<[], Promise<void>>` | Save the state of the current workspace layout. |
| `activeEditor` | `MarkdownFileInfo \| null` | A component managing the current editor. |

## Methods

### onLayoutReady

```ts
onLayoutReady(callback: () => any): void
```

Runs the callback function right away if layout is already ready,
or push it to a queue to be called later when layout is ready.

### changeLayout

```ts
changeLayout(workspace: any): Promise<void>
```

### getLayout

```ts
getLayout(): Record<string, unknown>
```

### createLeafInParent

```ts
createLeafInParent(parent: WorkspaceSplit, index: number): WorkspaceLeaf
```

### createLeafBySplit

```ts
createLeafBySplit(leaf: WorkspaceLeaf, direction?: SplitDirection, before?: boolean): WorkspaceLeaf
```

### splitActiveLeaf

```ts
splitActiveLeaf(direction?: SplitDirection): WorkspaceLeaf
```

### duplicateLeaf

```ts
duplicateLeaf(leaf: WorkspaceLeaf, direction?: SplitDirection): Promise<WorkspaceLeaf>
duplicateLeaf(leaf: WorkspaceLeaf, leafType: PaneType | boolean, direction?: SplitDirection): Promise<WorkspaceLeaf>
```

### getUnpinnedLeaf

```ts
getUnpinnedLeaf(): WorkspaceLeaf
```

### getLeaf

```ts
getLeaf(newLeaf?: 'split', direction?: SplitDirection): WorkspaceLeaf
getLeaf(newLeaf?: PaneType | boolean): WorkspaceLeaf
```

If newLeaf is false (or not set) then an existing leaf which can be navigated
is returned, or a new leaf will be created if there was no leaf available.

If newLeaf is `'tab'` or `true` then a new leaf will be created in the preferred
location within the root split and returned.

If newLeaf is `'split'` then a new leaf will be created adjacent to the currently active leaf.

If newLeaf is `'window'` then a popout window will be created with a new leaf inside.

### moveLeafToPopout

```ts
moveLeafToPopout(leaf: WorkspaceLeaf, data?: WorkspaceWindowInitData): WorkspaceWindow
```

Migrates this leaf to a new popout window.
Only works on the desktop app.

### openPopoutLeaf

```ts
openPopoutLeaf(data?: WorkspaceWindowInitData): WorkspaceLeaf
```

Open a new popout window with a single new leaf and return that leaf.
Only works on the desktop app.

### openLinkText

```ts
openLinkText(linktext: string, sourcePath: string, newLeaf?: PaneType | boolean, openViewState?: OpenViewState): Promise<void>
```

### setActiveLeaf

```ts
setActiveLeaf(leaf: WorkspaceLeaf, params?: {
        /** @public */
        focus?: boolean;
    }): void
setActiveLeaf(leaf: WorkspaceLeaf, pushHistory: boolean, focus: boolean): void
```

### getLeafById

```ts
getLeafById(id: string): WorkspaceLeaf | null
```

Retrieve a leaf by its id.

### getGroupLeaves

```ts
getGroupLeaves(group: string): WorkspaceLeaf[]
```

Get all leaves that belong to a group

### getMostRecentLeaf

```ts
getMostRecentLeaf(root?: WorkspaceParent): WorkspaceLeaf | null
```

Get the most recently active leaf in a given workspace root. Useful for interacting with the leaf in the root split while a sidebar leaf might be active.

### getLeftLeaf

```ts
getLeftLeaf(split: boolean): WorkspaceLeaf | null
```

Create a new leaf inside the left sidebar.

### getRightLeaf

```ts
getRightLeaf(split: boolean): WorkspaceLeaf | null
```

Create a new leaf inside the right sidebar.

### ensureSideLeaf

```ts
ensureSideLeaf(type: string, side: Side, options?: {
        /** @public */
        active?: boolean;
        /** @public */
        split?: boolean;
        /** @public */
        reveal?: boolean;
        /** @public */
        state?: any;
    }): Promise<WorkspaceLeaf>
```

Get side leaf or create one if one does not exist.

### getActiveViewOfType

```ts
getActiveViewOfType<T extends View>(type: Constructor<T>): T | null
```

Get the currently active view of a given type.

### getActiveFile

```ts
getActiveFile(): TFile | null
```

Returns the file for the current view if it's a `FileView`.
Otherwise, it will return the most recently active file.

### iterateRootLeaves

```ts
iterateRootLeaves(callback: (leaf: WorkspaceLeaf) => any): void
```

Iterate through all leaves in the main area of the workspace.

### iterateAllLeaves

```ts
iterateAllLeaves(callback: (leaf: WorkspaceLeaf) => any): void
```

Iterate through all leaves, including main area leaves, floating leaves, and sidebar leaves.

### getLeavesOfType

```ts
getLeavesOfType(viewType: string): WorkspaceLeaf[]
```

Get all leaves of a given type.

### detachLeavesOfType

```ts
detachLeavesOfType(viewType: string): void
```

Remove all leaves of the given type.

### revealLeaf

```ts
revealLeaf(leaf: WorkspaceLeaf): Promise<void>
```

Bring a given leaf to the foreground. If the leaf is in a sidebar, the sidebar will be uncollapsed.
`await` this function to ensure your view has been fully loaded and is not deferred.

### getLastOpenFiles

```ts
getLastOpenFiles(): string[]
```

Get the filenames of the 10 most recently opened files.

### updateOptions

```ts
updateOptions(): void
```

Calling this function will update/reconfigure the options of all Markdown views.
It is fairly expensive, so it should not be called frequently.

### handleLinkContextMenu

```ts
handleLinkContextMenu(menu: Menu, linktext: string, sourcePath: string, leaf?: WorkspaceLeaf): boolean
```

Add a context menu to internal file links.

## Events

| Event | Callback | Description |
|-------|----------|-------------|
| `quick-preview` | `(file: TFile, data: string) => any` | Triggered when the active Markdown file is modified. React to file changes before they are saved to disk. |
| `resize` | `() => any` | Triggered when a `WorkspaceItem` is resized or the workspace layout has changed. |
| `active-leaf-change` | `(leaf: WorkspaceLeaf \| null) => any` | Triggered when the active leaf changes. |
| `file-open` | `(file: TFile \| null) => any` | Triggered when the active file changes. The file could be in a new leaf, an existing leaf, or an embed. |
| `layout-change` | `() => any` |  |
| `window-open` | `(win: WorkspaceWindow, window: Window) => any` | Triggered when a new popout window is created. |
| `window-close` | `(win: WorkspaceWindow, window: Window) => any` | Triggered when a popout window is closed. |
| `css-change` | `() => any` | Triggered when the CSS of the app has changed. |
| `file-menu` | `(menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any` | Triggered when the user opens the context menu on a file. |
| `files-menu` | `(menu: Menu, files: TAbstractFile[], source: string, leaf?: WorkspaceLeaf) => any` | Triggered when the user opens the context menu with multiple files selected in the File Explorer. |
| `url-menu` | `(menu: Menu, url: string) => any` | Triggered when the user opens the context menu on an external URL. |
| `editor-menu` | `(menu: Menu, editor: Editor, info: MarkdownView \| MarkdownFileInfo) => any` | Triggered when the user opens the context menu on an editor. |
| `editor-change` | `(editor: Editor, info: MarkdownView \| MarkdownFileInfo) => any` | Triggered when changes to an editor has been applied, either programmatically or from a user event. |
| `editor-paste` | `(evt: ClipboardEvent, editor: Editor, info: MarkdownView \| MarkdownFileInfo) => any` | Triggered when the editor receives a paste event. Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled. Use `evt.preventDefault()` to indicate that you've handled the event. |
| `editor-drop` | `(evt: DragEvent, editor: Editor, info: MarkdownView \| MarkdownFileInfo) => any` | Triggered when the editor receives a drop event. Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled. Use `evt.preventDefault()` to indicate that you've handled the event. |
| `quit` | `(tasks: Tasks) => any` | Triggered when the app is about to quit. Not guaranteed to actually run. Perform some best effort cleanup here. |
