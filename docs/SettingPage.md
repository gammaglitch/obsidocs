# SettingPage

> Base class for a sub-page within a {@link SettingTab}. Use with the `page`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `rootEl` | `HTMLElement` |  |
| `titlebarEl` | `HTMLElement` |  |
| `containerEl` | `HTMLElement` | Container for the page's content. Render into this element from |
| `title` | `string` | Title displayed in the page titlebar. |

## Methods

### display

```ts
display(): void
```

Called when the page is opened. Clears and re-renders content
into {@link containerEl}.

### hide

```ts
hide(): void
```

Hides the contents of the page. Any registered components should be
unloaded when the page is hidden. Override this if you need to perform
additional cleanup.
Called when the user navigates away, the containing tab is switched, or
the settings modal is closed. Not guaranteed to run when the host window
is destroyed.
