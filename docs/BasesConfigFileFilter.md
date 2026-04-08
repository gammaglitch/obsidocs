# BasesConfigFileFilter

```ts
type BasesConfigFileFilter = string | {
    /**
     * @public
     * @since 1.10.0
     */
    and: BasesConfigFileFilter[];
} | {
    /**
     * @public
     * @since 1.10.0
     */
    or: BasesConfigFileFilter[];
} | {
    /**
     * @public
     * @since 1.10.0
     */
    not: BasesConfigFileFilter[];
}
```
