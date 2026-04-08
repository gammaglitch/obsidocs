# BasesQueryResult

> The BasesQueryResult contains all of the available information from executing the

## Properties

| Name | Type | Description |
|------|------|-------------|
| `data` | `BasesEntry[]` | An ungrouped version of the data, with user-configured sort and limit applied. |

## Methods

### getSummaryValue

```ts
getSummaryValue(queryController: QueryController, entries: BasesEntry[], prop: BasesPropertyId, summaryKey: string): Value
```

Applies a summary function to a single property over a set of entries.
