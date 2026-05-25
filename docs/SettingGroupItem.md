# SettingGroupItem

> A single item within a SettingDefinitionGroup — either a setting or a navigable page.

```ts
type SettingGroupItem<K extends string = string> = SettingDefinition<K> | SettingDefinitionPage<K>
```
