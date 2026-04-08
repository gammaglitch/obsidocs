# BasesView

> Plugins can create a class which extends this in order to render a Base.

Extends: `Component`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `string` | The type ID of this view |
| `app` | `App` |  |
| `config` | `BasesViewConfig` | The config object for this view. |
| `allProperties` | `BasesPropertyId[]` | All available properties from the dataset. |
| `data` | `BasesQueryResult` | The most recent output from executing the bases query, applying filters, and evaluating formulas. |

## Methods

### onDataUpdated

```ts
onDataUpdated(): void
```

Called when there is new data for the query. This view should rerender with the updated data.

### createFileForView

```ts
createFileForView(baseFileName?: string, frontmatterProcessor?: (frontmatter: any) => void): Promise<void>
```

Display the new note menu for a file with the provided filename and optionally a function to modify the frontmatter.
