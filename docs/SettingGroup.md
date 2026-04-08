# SettingGroup

## Methods

### setHeading

```ts
setHeading(text: string | DocumentFragment): this
```

### addClass

```ts
addClass(cls: string): this
```

### addSetting

```ts
addSetting(cb: (setting: Setting) => void): this
```

### addSearch

```ts
addSearch(cb: (component: SearchComponent) => any): this
```

Add a search input at the beginning of the setting group. Useful for filtering
results or adding an input for quick entry.

### addExtraButton

```ts
addExtraButton(cb: (component: ExtraButtonComponent) => any): this
```
