# SettingDefinitionItem

> A single item in the array returned by `getSettingDefinitions()`.

```ts
type SettingDefinitionItem<K extends string = string> = SettingDefinition<K> | SettingDefinitionGroup<K> | SettingDefinitionList<K> | SettingDefinitionPage<K>
```
