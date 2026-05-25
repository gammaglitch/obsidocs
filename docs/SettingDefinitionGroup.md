# SettingDefinitionGroup<K extends string = string>

> A group of settings rendered under a shared heading. Used as an inline
Extended by: `SettingDefinitionList`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `'group' \| 'list'` |  |
| `heading` | `string` | Heading text displayed above the group. |
| `cls` | `string` | CSS classes to add to the group element. |
| `search` | `(component: SearchComponent) => any` | Search component configuration for the header. |
| `extraButtons` | `((component: ExtraButtonComponent) => any)[]` | Extra button configuration for the header. |
| `items` | `SettingGroupItem<K>[]` | Settings within this group. |
| `visible` | `boolean \| (() => boolean)` | Controls whether the group is rendered. `false` or `() => false` hides |
