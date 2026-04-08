# BasesOptionGroup<T extends BasesOption>

> Collapsible container for other ViewOptions.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `'group'` |  |
| `displayName` | `string` |  |
| `items` | `T[]` |  |
| `shouldHide` | `() => boolean` | If provided, the group will be hidden if the function returns true. |
