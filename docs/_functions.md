# Functions

Standalone functions exported by the Obsidian API.

## addIcon

```ts
addIcon(iconId: string, svgContent: string): void
```

Adds an icon to the library.

## arrayBufferToBase64

```ts
arrayBufferToBase64(buffer: ArrayBuffer): string
```

## arrayBufferToHex

```ts
arrayBufferToHex(data: ArrayBuffer): string
```

## base64ToArrayBuffer

```ts
base64ToArrayBuffer(base64: string): ArrayBuffer
```

## debounce

```ts
debounce<T extends unknown[], V>(cb: (...args: [...T]) => V, timeout?: number, resetTimer?: boolean): Debouncer<T, V>
```

A standard debounce function.
Use this to have a time-delayed function only be called once in a given timeframe.

## displayTooltip

```ts
displayTooltip(newTargetEl: HTMLElement, content: string | DocumentFragment, options?: TooltipOptions): void
```

Manually trigger a tooltip that will appear over the provided element.

To display a tooltip on hover, use {@link setTooltip} instead.

## finishRenderMath

```ts
finishRenderMath(): Promise<void>
```

Flush the MathJax stylesheet.

## getAllTags

```ts
getAllTags(cache: CachedMetadata): string[] | null
```

Combines all tags from frontmatter and note content into a single array.

## getBlobArrayBuffer

```ts
getBlobArrayBuffer(blob: Blob): Promise<ArrayBuffer>
```

## getFrontMatterInfo

```ts
getFrontMatterInfo(content: string): FrontMatterInfo
```

Given the contents of a file, get information about the frontmatter of the file, including
whether there is a frontmatter block, the offsets of where it starts and ends, and the frontmatter text.

## getIcon

```ts
getIcon(iconId: string): SVGSVGElement | null
```

Create an SVG from an iconId. Returns null if no icon associated with the iconId.

## getIconIds

```ts
getIconIds(): IconName[]
```

Get the list of registered icons.

## getLanguage

```ts
getLanguage(): string
```

Get the ISO code for the currently configured app language. Defaults to 'en'.
See {@link https://github.com/obsidianmd/obsidian-translations?tab=readme-ov-file#existing-languages} for list of options.

## getLinkpath

```ts
getLinkpath(linktext: string): string
```

Converts the linktext to a linkpath.

## hexToArrayBuffer

```ts
hexToArrayBuffer(hex: string): ArrayBuffer
```

## htmlToMarkdown

```ts
htmlToMarkdown(html: string | HTMLElement | Document | DocumentFragment): string
```

Converts HTML to a Markdown string.

## iterateCacheRefs

```ts
iterateCacheRefs(cache: CachedMetadata, cb: (ref: ReferenceCache) => boolean | void): boolean
```

Iterate links and embeds.
If callback returns true, the iteration process will be interrupted.

## iterateRefs

```ts
iterateRefs(refs: Reference[], cb: (ref: Reference) => boolean | void): boolean
```

If callback returns true, the iteration process will be interrupted.

## loadMathJax

```ts
loadMathJax(): Promise<void>
```

Load MathJax.

## loadMermaid

```ts
loadMermaid(): Promise<any>
```

Load Mermaid and return a promise to the global mermaid object.
Can also use `mermaid` after this promise resolves to get the same reference.

## loadPdfJs

```ts
loadPdfJs(): Promise<any>
```

Load PDF.js and return a promise to the global pdfjsLib object.
Can also use `window.pdfjsLib` after this promise resolves to get the same reference.

## loadPrism

```ts
loadPrism(): Promise<any>
```

Load Prism.js and return a promise to the global Prism object.
Can also use `Prism` after this promise resolves to get the same reference.

## normalizePath

```ts
normalizePath(path: string): string
```

## parseFrontMatterAliases

```ts
parseFrontMatterAliases(frontmatter: any | null): string[] | null
```

## parseFrontMatterEntry

```ts
parseFrontMatterEntry(frontmatter: any | null, key: string | RegExp): any | null
```

## parseFrontMatterStringArray

```ts
parseFrontMatterStringArray(frontmatter: any | null, key: string | RegExp): string[] | null
```

## parseFrontMatterTags

```ts
parseFrontMatterTags(frontmatter: any | null): string[] | null
```

## parseLinktext

```ts
parseLinktext(linktext: string): {
    /**
     * @public
     */
    path: string;
    /**
     * @public
     */
    subpath: string;
}
```

Parses the linktext of a wikilink into its component parts.

## parsePropertyId

```ts
parsePropertyId(propertyId: BasesPropertyId): BasesProperty
```

Split a Bases property ID into constituent parts.

## parseYaml

```ts
parseYaml(yaml: string): any
```

## prepareFuzzySearch

```ts
prepareFuzzySearch(query: string): (text: string) => SearchResult | null
```

Construct a fuzzy search callback that runs on a target string.
Performance may be an issue if you are running the search for more than a few thousand times.
If performance is a problem, consider using `prepareSimpleSearch` instead.

## prepareSimpleSearch

```ts
prepareSimpleSearch(query: string): (text: string) => SearchResult | null
```

Construct a simple search callback that runs on a target string.

## removeIcon

```ts
removeIcon(iconId: string): void
```

Remove a custom icon from the library.

## renderMatches

```ts
renderMatches(el: HTMLElement | DocumentFragment, text: string, matches: SearchMatches | null, offset?: number): void
```

## renderMath

```ts
renderMath(source: string, display: boolean): HTMLElement
```

Render some LaTeX math using the MathJax engine. Returns an HTMLElement.
Requires calling `finishRenderMath` when rendering is all done to flush the MathJax stylesheet.

## renderResults

```ts
renderResults(el: HTMLElement, text: string, result: SearchResult, offset?: number): void
```

## request

```ts
request(request: RequestUrlParam | string): Promise<string>
```

Similar to `fetch()`, request a URL using HTTP/HTTPS, without any CORS restrictions.
Returns the text value of the response.

## requestUrl

```ts
requestUrl(request: RequestUrlParam | string): RequestUrlResponsePromise
```

Similar to `fetch()`, request a URL using HTTP/HTTPS, without any CORS restrictions.

## requireApiVersion

```ts
requireApiVersion(version: string): boolean
```

Returns true if the API version is equal or higher than the requested version.
Use this to limit functionality that require specific API versions to avoid
crashing on older Obsidian builds.

## resolveSubpath

```ts
resolveSubpath(cache: CachedMetadata, subpath: string): HeadingSubpathResult | BlockSubpathResult | FootnoteSubpathResult | null
```

Resolve the given subpath to a reference in the MetadataCache.

## sanitizeHTMLToDom

```ts
sanitizeHTMLToDom(html: string): DocumentFragment
```

## setIcon

```ts
setIcon(parent: HTMLElement, iconId: IconName): void
```

Insert an SVG into the element from an iconId. Does nothing if no icon associated with the iconId.

## setTooltip

```ts
setTooltip(el: HTMLElement, tooltip: string, options?: TooltipOptions): void
```

## sortSearchResults

```ts
sortSearchResults(results: SearchResultContainer[]): void
```

## stringifyYaml

```ts
stringifyYaml(obj: any): string
```

## stripHeading

```ts
stripHeading(heading: string): string
```

Normalizes headings for link matching by stripping out special characters and shrinking consecutive spaces.

## stripHeadingForLink

```ts
stripHeadingForLink(heading: string): string
```

Prepares headings for linking by stripping out some bad combinations of special characters that could break links.
