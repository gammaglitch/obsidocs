# SettingControlBase<V, K extends string = string>
Extended by: `SettingColorControl`, `SettingDropdownControl`, `SettingFileControl`, `SettingFolderControl`, `SettingNumberControl`, `SettingSliderControl`, `SettingTextAreaControl`, `SettingTextControl`, `SettingToggleControl`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `key` | `K` | The config/storage property name passed to `getControlValue` and |
| `defaultValue` | `V` | Fallback when the resolver returns undefined/null. |
| `validate` | `(value: V) => string \| void \| Promise<string \| void>` | Validate a candidate value before it is persisted. Return a non-empty |
| `disabled` | `boolean \| (() => boolean)` | Disables the control. Evaluated on each render, so a function form can |
