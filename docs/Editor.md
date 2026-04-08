# Editor

> A common interface that bridges the gap between CodeMirror 5 and CodeMirror 6.

*Abstract class*

## Methods

### getDoc

```ts
getDoc(): this
```

### refresh

```ts
refresh(): void
```

### getValue

```ts
getValue(): string
```

### setValue

```ts
setValue(content: string): void
```

### getLine

```ts
getLine(line: number): string
```

Get the text at line (0-indexed)

### setLine

```ts
setLine(n: number, text: string): void
```

### lineCount

```ts
lineCount(): number
```

Gets the number of lines in the document

### lastLine

```ts
lastLine(): number
```

### getSelection

```ts
getSelection(): string
```

### somethingSelected

```ts
somethingSelected(): boolean
```

### getRange

```ts
getRange(from: EditorPosition, to: EditorPosition): string
```

### replaceSelection

```ts
replaceSelection(replacement: string, origin?: string): void
```

### replaceRange

```ts
replaceRange(replacement: string, from: EditorPosition, to?: EditorPosition, origin?: string): void
```

### getCursor

```ts
getCursor(side?: 'from' | 'to' | 'head' | 'anchor'): EditorPosition
```

### listSelections

```ts
listSelections(): EditorSelection[]
```

### setCursor

```ts
setCursor(pos: EditorPosition | number, ch?: number): void
```

### setSelection

```ts
setSelection(anchor: EditorPosition, head?: EditorPosition): void
```

### setSelections

```ts
setSelections(ranges: EditorSelectionOrCaret[], main?: number): void
```

### focus

```ts
focus(): void
```

### blur

```ts
blur(): void
```

### hasFocus

```ts
hasFocus(): boolean
```

### getScrollInfo

```ts
getScrollInfo(): {
        /**
         * @public
         * @since 0.11.11
         */
        top: number;
        /**
         * @public
         * @since 0.11.11
         */
        left: number;
    }
```

### scrollTo

```ts
scrollTo(x?: number | null, y?: number | null): void
```

### scrollIntoView

```ts
scrollIntoView(range: EditorRange, center?: boolean): void
```

### undo

```ts
undo(): void
```

### redo

```ts
redo(): void
```

### exec

```ts
exec(command: EditorCommandName): void
```

### transaction

```ts
transaction(tx: EditorTransaction, origin?: string): void
```

### wordAt

```ts
wordAt(pos: EditorPosition): EditorRange | null
```

### posToOffset

```ts
posToOffset(pos: EditorPosition): number
```

### offsetToPos

```ts
offsetToPos(offset: number): EditorPosition
```

### processLines

```ts
processLines<T>(read: (line: number, lineText: string) => T | null, write: (line: number, lineText: string, value: T | null) => EditorChange | void, ignoreEmpty?: boolean): void
```
