# SettingDefinitionBase
Extended by: `SettingDefinitionAction`, `SettingDefinitionControl`, `SettingDefinitionEmpty`, `SettingDefinitionRender`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `name` | `string` | Display name — used for rendering and search. |
| `desc` | `string \| DocumentFragment` | Description text or fragment. Used for rendering; the textContent of a |
| `aliases` | `string[]` | Additional search terms. |
| `searchable` | `boolean \| (() => boolean)` | Controls search visibility. `false` or `() => false` excludes from search. Default: true. |
| `visible` | `boolean \| (() => boolean)` | Controls whether the item is rendered. `false` or `() => false` hides |
