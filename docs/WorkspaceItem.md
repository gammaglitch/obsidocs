# WorkspaceItem

Extends: `Events`
Extended by: `WorkspaceLeaf`, `WorkspaceParent`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `parent` | `WorkspaceParent` | The direct parent of the leaf. |

## Methods

### getRoot

```ts
getRoot(): WorkspaceItem
```

### getContainer

```ts
getContainer(): WorkspaceContainer
```

Get the root container parent item, which can be one of:
- {@link WorkspaceRoot}
- {@link WorkspaceWindow}
