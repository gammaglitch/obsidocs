# FuzzySuggestModal<T>

Extends: `SuggestModal<FuzzyMatch<T>>`

*Abstract class*

## Methods

### getSuggestions

```ts
getSuggestions(query: string): FuzzyMatch<T>[]
```

### renderSuggestion

```ts
renderSuggestion(item: FuzzyMatch<T>, el: HTMLElement): void
```

### onChooseSuggestion

```ts
onChooseSuggestion(item: FuzzyMatch<T>, evt: MouseEvent | KeyboardEvent): void
```

### getItems

```ts
getItems(): T[]
```

### getItemText

```ts
getItemText(item: T): string
```

### onChooseItem

```ts
onChooseItem(item: T, evt: MouseEvent | KeyboardEvent): void
```
