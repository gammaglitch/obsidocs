# SettingFolderControl<K extends string = string>

> Folder-path input with a vault folder suggester. Persists the selected folder's

Extends: `SettingControlBase<string, K>`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `'folder'` |  |
| `placeholder` | `string` |  |
| `filter` | `(folder: TFolder) => boolean` | Optional filter — only folders for which this returns truthy are suggested. |
| `includeRoot` | `boolean` | Whether the vault root is offered as a suggestion. Default: false. |
