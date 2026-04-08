# BasesViewConfig

> The in-memory representation of a single entry in the "views" section of a Bases file.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `name` | `string` | User-friendly name for this view. |

## Methods

### get

```ts
get(key: string): unknown
```

Retrieve the user-configured value of options exposed in `BasesViewRegistration.options`.

### getAsPropertyId

```ts
getAsPropertyId(key: string): BasesPropertyId | null
```

Retrieve a user-configured value from the config, converting it to a BasesPropertyId.
Returns null if the requested key is not present in the config, or if the value is invalid.

### getEvaluatedFormula

```ts
getEvaluatedFormula(view: BasesView, key: string): Value
```

Retrieve a user-configured value from the config, evaluating it as a
formula in the context of the current Base. For embedded bases, or bases
in the sidebar, this means evaluating the formula against the currently
active file.

### set

```ts
set(key: string, value: any | null): void
```

Store configuration data for the view. Views should prefer `BasesViewRegistration.options`
to allow users to configure options where appropriate.

### getOrder

```ts
getOrder(): BasesPropertyId[]
```

Ordered list of properties to display in this view.
In a table, these can be interpreted as the list of visible columns.
Order is configured by the user through the properties toolbar menu.

### getSort

```ts
getSort(): BasesSortConfig[]
```

Retrieve the sorting config for this view. Sort is configured by the user through the sort toolbar menu.
Removes invalid sort configs. If no (valid) sort config, returns an empty array.
Does not validate that the properties exists.

Note that data from BasesQueryResult will be presorted.

### getDisplayName

```ts
getDisplayName(propertyId: BasesPropertyId): string
```

Retrieve a friendly name for the provided property.
If the property has been renamed by the user in the Base config, that value is returned.
File properties may have a default name that is returned, otherwise the name with the property
type prefix removed is returned.
