# SettingDefinitionPage<K extends string = string>

> A declarative page of settings rendered as a navigable entry.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `'page'` |  |
| `name` | `string` | Display name shown as the navigable entry and page title. |
| `desc` | `string \| DocumentFragment` | Description shown on the navigable entry. |
| `items` | `SettingDefinitionItem<K>[]` | Inline items rendered as a declarative sub-page. Can include groups |
| `page` | `() => SettingPage` | Factory for a custom {@link SettingPage} subclass. Use this when the |
| `visible` | `boolean \| (() => boolean)` | Controls whether the page link is rendered. `false` or `() => false` |
