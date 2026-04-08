# BasesConfigFile

> Represents the serialized format of a Bases query as stored in a `.base` file.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `filters` | `BasesConfigFileFilter` |  |
| `properties` | `Record<string, Record<string, any>>` | Configuration for properties in this Base. |
| `formulas` | `Record<string, string>` | Configuration for formulas used in this Base. |
| `summaries` | `Record<string, string>` | Configuration for summary formulas used in this Base. |
| `views` | `BasesConfigFileView[]` | Configuration for views used in this Base. |
