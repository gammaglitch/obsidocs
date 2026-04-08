# BasesViewRegistration

> Container for options when registering a new Bases view type.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `name` | `string` |  |
| `icon` | `IconName` | Icon ID to be used in the Bases view selector. |
| `factory` | `BasesViewFactory` |  |
| `options` | `(config: BasesViewConfig) => BasesAllOptions[]` |  |
