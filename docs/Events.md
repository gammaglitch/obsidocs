# Events
Extended by: `MetadataCache`, `Vault`, `Workspace`, `WorkspaceItem`

## Methods

### on

```ts
on(name: string, callback: (...data: unknown[]) => unknown, ctx?: any): EventRef
```

### off

```ts
off(name: string, callback: (...data: unknown[]) => unknown): void
```

### offref

```ts
offref(ref: EventRef): void
```

### trigger

```ts
trigger(name: string, ...data?: unknown[]): void
```

### tryTrigger

```ts
tryTrigger(evt: EventRef, args: unknown[]): void
```
