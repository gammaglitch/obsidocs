# Command

## Properties

| Name | Type | Description |
|------|------|-------------|
| `id` | `string` | Globally unique ID to identify this command. |
| `name` | `string` | Human friendly name for searching. |
| `icon` | `IconName` | Icon ID to be used in the toolbar. |
| `mobileOnly` | `boolean` |  |
| `repeatable` | `boolean` | Whether holding the hotkey should repeatedly trigger this command. |
| `callback` | `() => any` | Simple callback, triggered globally. |
| `checkCallback` | `(checking: boolean) => boolean \| void` | Complex callback, overrides the simple callback. |
| `editorCallback` | `(editor: Editor, ctx: MarkdownView \| MarkdownFileInfo) => any` | A command callback that is only triggered when the user is in an editor. |
| `editorCheckCallback` | `(checking: boolean, editor: Editor, ctx: MarkdownView \| MarkdownFileInfo) => boolean \| void` | A command callback that is only triggered when the user is in an editor. |
| `hotkeys` | `Hotkey[]` | Sets the default hotkey. It is recommended for plugins to avoid setting default hotkeys if possible, |
