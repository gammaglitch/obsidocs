# FileManager

> Manage the creation, deletion and renaming of files from the UI.

## Methods

### getNewFileParent

```ts
getNewFileParent(sourcePath: string, newFilePath?: string): TFolder
```

Gets the folder that new files should be saved to, given the user's preferences.

### renameFile

```ts
renameFile(file: TAbstractFile, newPath: string): Promise<void>
```

Rename or move a file safely, and update all links to it depending on the user's preferences.

### promptForDeletion

```ts
promptForDeletion(file: TAbstractFile): Promise<boolean>
```

Prompt the user to confirm they want to delete the specified file or folder

### trashFile

```ts
trashFile(file: TAbstractFile): Promise<void>
```

Remove a file or a folder from the vault according the user's preferred 'trash'
options (either moving the file to .trash/ or the OS trash bin).

### generateMarkdownLink

```ts
generateMarkdownLink(file: TFile, sourcePath: string, subpath?: string, alias?: string): string
```

Generate a Markdown link based on the user's preferences.

### processFrontMatter

```ts
processFrontMatter(file: TFile, fn: (frontmatter: any) => void, options?: DataWriteOptions): Promise<void>
```

Atomically read, modify, and save the frontmatter of a note.
The frontmatter is passed in as a JS object, and should be mutated directly to achieve the desired result.

Remember to handle errors thrown by this method.

### getAvailablePathForAttachment

```ts
getAvailablePathForAttachment(filename: string, sourcePath?: string): Promise<string>
```

Resolves a unique path for the attachment file being saved.
Ensures that the parent directory exists and dedupes the
filename if the destination filename already exists.
