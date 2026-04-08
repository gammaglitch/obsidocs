# SettingTab
Extended by: `PluginSettingTab`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `icon` | `IconName` | The icon to display in the settings sidebar. |
| `app` | `App` | Reference to the app instance. |
| `containerEl` | `HTMLElement` | HTML element for the setting tab content. |

## Methods

### display

```ts
display(): void
```

Called when the settings tab should be rendered.

### hide

```ts
hide(): void
```

Hides the contents of the setting tab.
Any registered components should be unloaded when the view is hidden.
Override this if you need to perform additional cleanup.
