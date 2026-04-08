# Vault

> Work with files and folders stored inside a vault.

Extends: `Events`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `adapter` | `DataAdapter` |  |
| `configDir` | `string` | Gets the path to the config folder. |

## Methods

### getName

```ts
getName(): string
```

Gets the name of the vault.

### getFileByPath

```ts
getFileByPath(path: string): TFile | null
```

Get a file inside the vault at the given path.
Returns `null` if the file does not exist.

### getFolderByPath

```ts
getFolderByPath(path: string): TFolder | null
```

Get a folder inside the vault at the given path.
Returns `null` if the folder does not exist.

### getAbstractFileByPath

```ts
getAbstractFileByPath(path: string): TAbstractFile | null
```

Get a file or folder inside the vault at the given path. To check if the return type is
a file, use `instanceof TFile`. To check if it is a folder, use `instanceof TFolder`.

### getRoot

```ts
getRoot(): TFolder
```

Get the root folder of the current vault.

### create

```ts
create(path: string, data: string, options?: DataWriteOptions): Promise<TFile>
```

Create a new plaintext file inside the vault.

### createBinary

```ts
createBinary(path: string, data: ArrayBuffer, options?: DataWriteOptions): Promise<TFile>
```

Create a new binary file inside the vault.

### createFolder

```ts
createFolder(path: string): Promise<TFolder>
```

Create a new folder inside the vault.

### read

```ts
read(file: TFile): Promise<string>
```

Read a plaintext file that is stored inside the vault, directly from disk.
Use this if you intend to modify the file content afterwards.
Use {@link Vault.cachedRead} otherwise for better performance.

### cachedRead

```ts
cachedRead(file: TFile): Promise<string>
```

Read the content of a plaintext file stored inside the vault
Use this if you only want to display the content to the user.
If you want to modify the file content afterward use {@link Vault.read}

### readBinary

```ts
readBinary(file: TFile): Promise<ArrayBuffer>
```

Read the content of a binary file stored inside the vault.

### getResourcePath

```ts
getResourcePath(file: TFile): string
```

Returns a URI for the browser engine to use, for example to embed an image.

### delete

```ts
delete(file: TAbstractFile, force?: boolean): Promise<void>
```

Deletes the file completely.

### trash

```ts
trash(file: TAbstractFile, system: boolean): Promise<void>
```

Tries to move to system trash. If that isn't successful/allowed, use local trash

### rename

```ts
rename(file: TAbstractFile, newPath: string): Promise<void>
```

Rename or move a file. To ensure links are automatically renamed,
use {@link FileManager.renameFile} instead.

### modify

```ts
modify(file: TFile, data: string, options?: DataWriteOptions): Promise<void>
```

Modify the contents of a plaintext file.

### modifyBinary

```ts
modifyBinary(file: TFile, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>
```

Modify the contents of a binary file.

### append

```ts
append(file: TFile, data: string, options?: DataWriteOptions): Promise<void>
```

Add text to the end of a plaintext file inside the vault.

### appendBinary

```ts
appendBinary(file: TFile, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>
```

Add data to the end of a binary file inside the vault.

### process

```ts
process(file: TFile, fn: (data: string) => string, options?: DataWriteOptions): Promise<string>
```

Atomically read, modify, and save the contents of a note.

### copy

```ts
copy<T extends TAbstractFile>(file: T, newPath: string): Promise<T>
```

Create a copy of a file or folder.

### getAllLoadedFiles

```ts
getAllLoadedFiles(): TAbstractFile[]
```

Get all files and folders in the vault.

### getAllFolders

```ts
getAllFolders(includeRoot?: boolean): TFolder[]
```

Get all folders in the vault.

### recurseChildren

```ts
recurseChildren(root: TFolder, cb: (file: TAbstractFile) => any): void
```

### getMarkdownFiles

```ts
getMarkdownFiles(): TFile[]
```

Get all Markdown files in the vault.

### getFiles

```ts
getFiles(): TFile[]
```

Get all files in the vault.

## Events

| Event | Callback | Description |
|-------|----------|-------------|
| `create` | `(file: TAbstractFile) => any` | Called when a file is created. This is also called when the vault is first loaded for each existing file If you do not wish to receive create events on vault load, register your event handler inside {@link Workspace.onLayoutReady}. |
| `modify` | `(file: TAbstractFile) => any` | Called when a file is modified. |
| `delete` | `(file: TAbstractFile) => any` | Called when a file is deleted. |
| `rename` | `(file: TAbstractFile, oldPath: string) => any` | Called when a file is renamed. |
