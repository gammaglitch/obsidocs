# FileView

Extends: `ItemView`
Extended by: `EditableFileView`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `allowNoFile` | `boolean` |  |
| `file` | `TFile \| null` |  |
| `navigation` | `boolean` | File views can be navigated by default. |

## Methods

### getDisplayText

```ts
getDisplayText(): string
```

### onload

```ts
onload(): void
```

### getState

```ts
getState(): Record<string, unknown>
```

### setState

```ts
setState(state: any, result: ViewStateResult): Promise<void>
```

### onLoadFile

```ts
onLoadFile(file: TFile): Promise<void>
```

### onUnloadFile

```ts
onUnloadFile(file: TFile): Promise<void>
```

### onRename

```ts
onRename(file: TFile): Promise<void>
```

### canAcceptExtension

```ts
canAcceptExtension(extension: string): boolean
```
