# BasesOption
Extended by: `BasesDropdownOption`, `BasesFileOption`, `BasesFolderOption`, `BasesFormulaOption`, `BasesMultitextOption`, `BasesPropertyOption`, `BasesSliderOption`, `BasesTextOption`, `BasesToggleOption`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `key` | `string` |  |
| `type` | `string` |  |
| `displayName` | `string` |  |
| `shouldHide` | `() => boolean` | If provided, the option will be hidden if the function returns true. |
