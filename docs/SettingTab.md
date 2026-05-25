# SettingTab
Extended by: `PluginSettingTab`

*Abstract class*

## Properties

| Name | Type | Description |
|------|------|-------------|
| `icon` | `IconName` | The icon to display in the settings sidebar. |
| `app` | `App` | Reference to the app instance. |
| `containerEl` | `HTMLElement` | HTML element for the setting tab content. |
| `settingItems` | `SettingDefinitionItem[]` | Nested setting definitions as returned by getSettingDefinitions(). |

## Methods

### getSettingDefinitions

```ts
getSettingDefinitions(): SettingDefinitionItem[]
```

Override to provide setting definitions. Return an array of definitions
and inline groups. Called on every display() and once when the tab is
added to the setting modal for search indexing.

### update

```ts
update(): void
```

Stores the result of getSettingDefinitions() for rendering and search indexing.
Called by addSettingTab() and by dynamic tabs when their data changes.

### getControlValue

```ts
getControlValue(key: string): unknown
```

Read the current value for a control key. Called on every render of a
`control`-type setting definition.

The default implementation reads from `this.app.vault.getConfig` —
appropriate for the app's own setting tabs. `PluginSettingTab` and
`InternalPluginSettingTab` override this to read from their conventional
settings storage; plugins with custom storage override on their
subclass.

### setControlValue

```ts
setControlValue(key: string, value: unknown): void | Promise<void>
```

Persist a new value for a control key. Called on user change of a
`control`-type setting definition.

The default implementation writes to `this.app.vault.setConfig`.
Override to persist elsewhere; pair with `getControlValue`.

### refreshDomState

```ts
refreshDomState(): void
```

Re-evaluate every `visible` and `disabled` predicate against the
current state and apply the result to the rendered DOM. Call this
from a `render` callback's onChange (or any other imperative path)
after mutating state that other settings' predicates depend on.

Cheap: toggles CSS state in place, no re-render. For changes that
affect the structure of the definitions themselves (added or removed
items), call `update()` instead.

### display

```ts
display(): void
```

Override to render the tab imperatively.

Not called when {@link getSettingDefinitions} returns a non-empty array;
the tab is rendered declaratively from those definitions instead. Only
implement display() as a fallback for plugins that need to support
Obsidian versions older than 1.13.0.

### hide

```ts
hide(): void
```

Hides the contents of the setting tab.
Any registered components should be unloaded when the view is hidden.
Override this if you need to perform additional cleanup.
