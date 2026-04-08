# MetadataCache

> Linktext is any internal link that is composed of a path and a subpath, such as 'My note#Heading'

Extends: `Events`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `resolvedLinks` | `Record<string, Record<string, number>>` | Contains all resolved links. This object maps each source file's path to an object of destination file paths with the link count. |
| `unresolvedLinks` | `Record<string, Record<string, number>>` | Contains all unresolved links. This object maps each source file to an object of unknown destinations with count. |

## Methods

### getFirstLinkpathDest

```ts
getFirstLinkpathDest(linkpath: string, sourcePath: string): TFile | null
```

Get the best match for a linkpath.

### getFileCache

```ts
getFileCache(file: TFile): CachedMetadata | null
```

### getCache

```ts
getCache(path: string): CachedMetadata | null
```

### fileToLinktext

```ts
fileToLinktext(file: TFile, sourcePath: string, omitMdExtension?: boolean): string
```

Generates a linktext for a file.

If file name is unique, use the filename.
If not unique, use full path.

## Events

| Event | Callback | Description |
|-------|----------|-------------|
| `changed` | `(file: TFile, data: string, cache: CachedMetadata) => any` | Called when a file has been indexed, and its (updated) cache is now available.  Note: This is not called when a file is renamed for performance reasons. You must hook the vault rename event for those. |
| `deleted` | `(file: TFile, prevCache: CachedMetadata \| null) => any` | Called when a file has been deleted. A best-effort previous version of the cached metadata is presented, but it could be null in case the file was not successfully cached previously. |
| `resolve` | `(file: TFile) => any` | Called when a file has been resolved for `resolvedLinks` and `unresolvedLinks`. This happens sometimes after a file has been indexed. |
| `resolved` | `() => any` | Called when all files has been resolved. This will be fired each time files get modified after the initial load. |
