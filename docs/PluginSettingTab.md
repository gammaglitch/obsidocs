# PluginSettingTab

> Provides a unified interface for users to configure the plugin.

Extends: `SettingTab`

*Abstract class*

## Methods

### getSettingDefinitions

```ts
getSettingDefinitions(): SettingDefinitionItem[]
```

### getControlValue

```ts
getControlValue(key: string): unknown
```

Reads from `this.plugin.settings`. Override to read from a different
data source.

### setControlValue

```ts
setControlValue(key: string, value: unknown): void | Promise<void>
```

Mutates and persists `this.plugin.settings`. Override to write to a
different data source.
