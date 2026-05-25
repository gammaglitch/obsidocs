# SettingDefinitionList<K extends string = string>

> A specialized {@link SettingDefinitionGroup} for collections of mutable

Extends: `SettingDefinitionGroup<K>`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `type` | `'list'` |  |
| `emptyState` | `string \| DocumentFragment` | Text to display when `items` is empty. |
| `onReorder` | `(oldIndex: number, newIndex: number) => void` | When set, adds a drag handle to each item and enables drag-to-reorder. Called with old and new indices. |
| `onDelete` | `(index: number) => void` | When set, adds a delete button to each item and enables Delete/Backspace keyboard shortcut. Called with the item index. |
| `addItem` | `SettingDefinitionAddItem` | Add-entry affordance. The framework renders a platform-appropriate |
