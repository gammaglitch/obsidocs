# BasesConfigFileView

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `string` | Unique identifier for the view type. Used to select the correct view renderer. |
| `name` | `string` | Friendly name for this view, displayed in the UI to select between views. |
| `filters` | `BasesConfigFileFilter` | Additional filters, applied only to this view. |
| `groupBy` | `{      }` | Configuration for grouping the results of this view. |
| `order` | `string[]` | An ordered list of the properties to display in this view. |
| `summaries` | `Record<string, string>` | Configuration of summaries to display for each property in this view. |
