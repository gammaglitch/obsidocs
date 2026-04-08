# Plugin

Extends: `Component`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `app` | `App` |  |
| `manifest` | `PluginManifest` |  |

## Methods

### onload

```ts
onload(): Promise<void> | void
```

### addRibbonIcon

```ts
addRibbonIcon(icon: IconName, title: string, callback: (evt: MouseEvent) => any): HTMLElement
```

Adds a ribbon icon to the left bar.

### addStatusBarItem

```ts
addStatusBarItem(): HTMLElement
```

Adds a status bar item to the bottom of the app.
Not available on mobile.

### addCommand

```ts
addCommand(command: Command): Command
```

Register a command globally.
Registered commands will be available from the {@link https://help.obsidian.md/Plugins/Command+palette Command palette}.
The command id and name will be automatically prefixed with this plugin's id and name.

### removeCommand

```ts
removeCommand(commandId: string): void
```

Manually remove a command from the list of global commands.
This should not be needed unless your plugin registers commands dynamically.

### addSettingTab

```ts
addSettingTab(settingTab: PluginSettingTab): void
```

Register a settings tab, which allows users to change settings.

### registerView

```ts
registerView(type: string, viewCreator: ViewCreator): void
```

### registerHoverLinkSource

```ts
registerHoverLinkSource(id: string, info: HoverLinkSource): void
```

Registers a view with the 'Page preview' core plugin as an emitter of the 'hover-link' event.

### registerExtensions

```ts
registerExtensions(extensions: string[], viewType: string): void
```

### registerMarkdownPostProcessor

```ts
registerMarkdownPostProcessor(postProcessor: MarkdownPostProcessor, sortOrder?: number): MarkdownPostProcessor
```

Registers a post processor, to change how the document looks in reading mode.

### registerMarkdownCodeBlockProcessor

```ts
registerMarkdownCodeBlockProcessor(language: string, handler: (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<any> | void, sortOrder?: number): MarkdownPostProcessor
```

Register a special post processor that handles fenced code given a language and a handler.
This special post processor takes care of removing the `<pre><code>` and create a `<div>` that
will be passed to the handler, and is expected to be filled with custom elements.

### registerBasesView

```ts
registerBasesView(viewId: string, registration: BasesViewRegistration): boolean
```

Register a Base view handler that can be used to render data from property queries.

### registerEditorExtension

```ts
registerEditorExtension(extension: Extension): void
```

Registers a CodeMirror 6 extension.
To reconfigure cm6 extensions for a plugin on the fly, an array should be passed in, and modified dynamically.
Once this array is modified, calling {@link Workspace.updateOptions} will apply the changes.

### registerObsidianProtocolHandler

```ts
registerObsidianProtocolHandler(action: string, handler: ObsidianProtocolHandler): void
```

Register a handler for obsidian:// URLs.

### registerEditorSuggest

```ts
registerEditorSuggest(editorSuggest: EditorSuggest<any>): void
```

Register an EditorSuggest which can provide live suggestions while the user is typing.

### registerCliHandler

```ts
registerCliHandler(command: string, description: string, flags: CliFlags | null, handler: CliHandler): void
```

Register a CLI handler to handle a command from the CLI.
Command IDs must be globally unique. Attempting to register a command that is already registered will throw an Error.

Use the format `<plugin-id>` for your default command, and `<plugin-id>:<action>` for sub-commands and actions.

### loadData

```ts
loadData(): Promise<any>
```

Load settings data from disk.
Data is stored in `data.json` in the plugin folder.

### saveData

```ts
saveData(data: any): Promise<void>
```

Write settings data to disk.
Data is stored in `data.json` in the plugin folder.

### onUserEnable

```ts
onUserEnable(): void
```

Perform any initial setup code. The user has explicitly interacted with the plugin
so its safe to engage with the user. If your plugin registers a custom view,
you can open it here.

### onExternalSettingsChange

```ts
onExternalSettingsChange(): any
```

Called when the `data.json` file is modified on disk externally from Obsidian.
This usually means that a Sync service or external program has modified
the plugin settings.

Implement this method to reload plugin settings when they have changed externally.
