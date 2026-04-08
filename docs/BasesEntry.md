# BasesEntry

> Represent a single "row" or file in a base.
Implements: `FormulaContext`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `file` | `TFile` |  |

## Methods

### getValue

```ts
getValue(propertyId: BasesPropertyId): Value | null
```

Get the value of the property.
Note: Errors are returned as {@link ErrorValue}
