# CachedMetadata

## Properties

| Name | Type | Description |
|------|------|-------------|
| `links` | `LinkCache[]` |  |
| `embeds` | `EmbedCache[]` |  |
| `tags` | `TagCache[]` |  |
| `headings` | `HeadingCache[]` |  |
| `footnotes` | `FootnoteCache[]` |  |
| `footnoteRefs` | `FootnoteRefCache[]` |  |
| `referenceLinks` | `ReferenceLinkCache[]` |  |
| `sections` | `SectionCache[]` | Sections are root level markdown blocks, which can be used to divide the document up. |
| `listItems` | `ListItemCache[]` |  |
| `frontmatter` | `FrontMatterCache` |  |
| `frontmatterPosition` | `Pos` | Position of the frontmatter in the file. |
| `frontmatterLinks` | `FrontmatterLinkCache[]` |  |
| `blocks` | `Record<string, BlockCache>` |  |
