# Reference

> Base interface for items that point to a different location.
Extended by: `FrontmatterLinkCache`, `ReferenceCache`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `link` | `string` | Link destination. |
| `original` | `string` | Contains the text as it's written in the document. Not available on Publish. |
| `displayText` | `string` | Available if title is different from link text, in the case of `[[page name\|display name]]` this will return `display name` |
