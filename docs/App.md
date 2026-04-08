# App

## Properties

| Name | Type | Description |
|------|------|-------------|
| `keymap` | `Keymap` |  |
| `scope` | `Scope` |  |
| `workspace` | `Workspace` |  |
| `vault` | `Vault` |  |
| `metadataCache` | `MetadataCache` |  |
| `fileManager` | `FileManager` |  |
| `lastEvent` | `UserEvent \| null` | The last known user interaction event, to help commands find out what modifier keys are pressed. |
| `renderContext` | `RenderContext` |  |
| `secretStorage` | `SecretStorage` |  |

## Methods

### isDarkMode

```ts
isDarkMode(): boolean
```

### loadLocalStorage

```ts
loadLocalStorage(key: string): any | null
```

Retrieve value from `localStorage` for this vault.

### saveLocalStorage

```ts
saveLocalStorage(key: string, data: unknown | null): void
```

Save vault-specific value to `localStorage`. If data is `null`, the entry will be cleared.
