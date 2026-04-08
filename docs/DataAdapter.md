# DataAdapter

> Work directly with files and folders inside a vault.

## Methods

### getName

```ts
getName(): string
```

### exists

```ts
exists(normalizedPath: string, sensitive?: boolean): Promise<boolean>
```

Check if something exists at the given path. For a faster way to synchronously check
if a note or attachment is in the vault, use {@link Vault.getAbstractFileByPath}.

### stat

```ts
stat(normalizedPath: string): Promise<Stat | null>
```

Retrieve metadata about the given file/folder.

### list

```ts
list(normalizedPath: string): Promise<ListedFiles>
```

Retrieve a list of all files and folders inside the given folder, non-recursive.

### read

```ts
read(normalizedPath: string): Promise<string>
```

### readBinary

```ts
readBinary(normalizedPath: string): Promise<ArrayBuffer>
```

### write

```ts
write(normalizedPath: string, data: string, options?: DataWriteOptions): Promise<void>
```

Write to a plaintext file.
If the file exists its content will be overwritten, otherwise the file will be created.

### writeBinary

```ts
writeBinary(normalizedPath: string, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>
```

Write to a binary file.
If the file exists its content will be overwritten, otherwise the file will be created.

### append

```ts
append(normalizedPath: string, data: string, options?: DataWriteOptions): Promise<void>
```

Add text to the end of a plaintext file.

### appendBinary

```ts
appendBinary(normalizedPath: string, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>
```

Add data to the end of a binary file.

### process

```ts
process(normalizedPath: string, fn: (data: string) => string, options?: DataWriteOptions): Promise<string>
```

Atomically read, modify, and save the contents of a plaintext file.

### getResourcePath

```ts
getResourcePath(normalizedPath: string): string
```

Returns a URI for the browser engine to use, for example to embed an image.

### mkdir

```ts
mkdir(normalizedPath: string): Promise<void>
```

Create a directory.

### trashSystem

```ts
trashSystem(normalizedPath: string): Promise<boolean>
```

Try moving to system trash.

### trashLocal

```ts
trashLocal(normalizedPath: string): Promise<void>
```

Move to local trash.
Files will be moved into the `.trash` folder at the root of the vault.

### rmdir

```ts
rmdir(normalizedPath: string, recursive: boolean): Promise<void>
```

Remove a directory.

### remove

```ts
remove(normalizedPath: string): Promise<void>
```

Delete a file.

### rename

```ts
rename(normalizedPath: string, normalizedNewPath: string): Promise<void>
```

Rename a file or folder.

### copy

```ts
copy(normalizedPath: string, normalizedNewPath: string): Promise<void>
```

Create a copy of a file.
This will fail if there is already a file at `normalizedNewPath`.
