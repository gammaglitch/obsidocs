# SettingFileControl<K extends string = string>

> File-path input with a vault file suggester. Persists the selected file's

Extends: `SettingControlBase<string, K>`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `'file'` |  |
| `placeholder` | `string` |  |
| `filter` | `(file: TFile) => boolean` | Optional filter — only files for which this returns truthy are suggested. |
