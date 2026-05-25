# API Atlas

Orientation map for the Obsidian API: classes and interfaces grouped by what
they're for, followed by the main inheritance trees. Find the right area here,
then open `<Name>.md` for the full surface. For the exhaustive alphabetical
listing see `_common.md` and `_other.md`.

## Plugin & lifecycle

Entry points and the component lifecycle everything builds on.

- [Plugin](Plugin.md) — class
- [App](App.md) — class
- [Component](Component.md) — class
- [PluginManifest](PluginManifest.md) — Metadata about a Community plugin.
- [PluginSettingTab](PluginSettingTab.md) — Provides a unified interface for users to configure the plugin.

## Files & vault

Reading, writing, watching, and resolving files and folders.

- [Vault](Vault.md) — Work with files and folders stored inside a vault.
- [TAbstractFile](TAbstractFile.md) — This can be either a `TFile` or a `TFolder`.
- [TFile](TFile.md) — class
- [TFolder](TFolder.md) — class
- [FileManager](FileManager.md) — Manage the creation, deletion and renaming of files from the UI.
- [FileSystemAdapter](FileSystemAdapter.md) — Implementation of the vault adapter for desktop.
- [DataAdapter](DataAdapter.md) — Work directly with files and folders inside a vault.
- [DataWriteOptions](DataWriteOptions.md) — interface
- [FileStats](FileStats.md) — interface

## Workspace & views

Panes, leaves, and the view classes that render content into them.

- [Workspace](Workspace.md) — class
- [WorkspaceLeaf](WorkspaceLeaf.md) — class
- [WorkspaceItem](WorkspaceItem.md) — class
- [WorkspaceParent](WorkspaceParent.md) — class
- [WorkspaceSplit](WorkspaceSplit.md) — class
- [WorkspaceTabs](WorkspaceTabs.md) — class
- [WorkspaceSidedock](WorkspaceSidedock.md) — class
- [WorkspaceMobileDrawer](WorkspaceMobileDrawer.md) — class
- [WorkspaceWindow](WorkspaceWindow.md) — class
- [WorkspaceRibbon](WorkspaceRibbon.md) — class
- [View](View.md) — class
- [ItemView](ItemView.md) — class
- [FileView](FileView.md) — class
- [EditableFileView](EditableFileView.md) — class
- [MarkdownView](MarkdownView.md) — class
- [MarkdownFileInfo](MarkdownFileInfo.md) — interface
- [MarkdownEditView](MarkdownEditView.md) — This is the editor for Obsidian Mobile as well as the WYSIWYG editor.
- [MarkdownSubView](MarkdownSubView.md) — interface
- [TextFileView](TextFileView.md) — This class implements a plaintext-based editable file view, which can be loaded and saved given an editor.
- [WorkspaceContainer](WorkspaceContainer.md) — class
- [WorkspaceFloating](WorkspaceFloating.md) — class
- [WorkspaceRoot](WorkspaceRoot.md) — class
- [WorkspaceWindowInitData](WorkspaceWindowInitData.md) — interface

## Editor & Markdown rendering

Editing document text and rendering Markdown to the DOM.

- [Editor](Editor.md) — A common interface that bridges the gap between CodeMirror 5 and CodeMirror 6.
- [EditorPosition](EditorPosition.md) — interface
- [EditorRange](EditorRange.md) — interface
- [EditorSelection](EditorSelection.md) — interface
- [EditorSelectionOrCaret](EditorSelectionOrCaret.md) — interface
- [EditorChange](EditorChange.md) — interface
- [EditorTransaction](EditorTransaction.md) — interface
- [MarkdownRenderer](MarkdownRenderer.md) — class
- [MarkdownRenderChild](MarkdownRenderChild.md) — class
- [MarkdownPreviewView](MarkdownPreviewView.md) — class
- [MarkdownPreviewRenderer](MarkdownPreviewRenderer.md) — class
- [MarkdownPostProcessor](MarkdownPostProcessor.md) — A post processor receives an element which is a section of the preview.
- [MarkdownPostProcessorContext](MarkdownPostProcessorContext.md) — interface
- [MarkdownSectionInformation](MarkdownSectionInformation.md) — interface
- [EditorCommandName](EditorCommandName.md) — type
- [EditorRangeOrCaret](EditorRangeOrCaret.md) — interface
- [EditorScrollInfo](EditorScrollInfo.md) — interface
- [EditorSuggestContext](EditorSuggestContext.md) — interface
- [EditorSuggestTriggerInfo](EditorSuggestTriggerInfo.md) — interface
- [MarkdownPreviewEvents](MarkdownPreviewEvents.md) — interface
- [MarkdownViewModeType](MarkdownViewModeType.md) — type

## Settings & UI components

Setting rows and the reusable input widgets they hold.

- [Setting](Setting.md) — class
- [BaseComponent](BaseComponent.md) — class
- [ValueComponent](ValueComponent.md) — class
- [AbstractTextComponent](AbstractTextComponent.md) — class
- [TextComponent](TextComponent.md) — class
- [TextAreaComponent](TextAreaComponent.md) — class
- [ToggleComponent](ToggleComponent.md) — class
- [DropdownComponent](DropdownComponent.md) — class
- [SliderComponent](SliderComponent.md) — class
- [ButtonComponent](ButtonComponent.md) — class
- [ExtraButtonComponent](ExtraButtonComponent.md) — class
- [ColorComponent](ColorComponent.md) — Color picker component. Values are by default 6-digit hash-prefixed hex strings like `#000000`.
- [SearchComponent](SearchComponent.md) — class
- [ProgressBarComponent](ProgressBarComponent.md) — class
- [MomentFormatComponent](MomentFormatComponent.md) — class
- [CloseableComponent](CloseableComponent.md) — A closeable component that can get dismissed via the Android 'back' button.
- [SecretComponent](SecretComponent.md) — class
- [SettingColorControl](SettingColorControl.md) — interface
- [SettingControl](SettingControl.md) — type
- [SettingControlBase](SettingControlBase.md) — interface
- [SettingDefinition](SettingDefinition.md) — type
- [SettingDefinitionAction](SettingDefinitionAction.md) — interface
- [SettingDefinitionAddItem](SettingDefinitionAddItem.md) — Configuration for a {@link SettingDefinitionList}'s `addItem` affordance.
- [SettingDefinitionBase](SettingDefinitionBase.md) — interface
- [SettingDefinitionControl](SettingDefinitionControl.md) — interface
- [SettingDefinitionEmpty](SettingDefinitionEmpty.md) — interface
- [SettingDefinitionGroup](SettingDefinitionGroup.md) — A group of settings rendered under a shared heading. Used as an inline
- [SettingDefinitionItem](SettingDefinitionItem.md) — A single item in the array returned by `getSettingDefinitions()`.
- [SettingDefinitionList](SettingDefinitionList.md) — A specialized {@link SettingDefinitionGroup} for collections of mutable
- [SettingDefinitionPage](SettingDefinitionPage.md) — A declarative page of settings rendered as a navigable entry.
- [SettingDefinitionRender](SettingDefinitionRender.md) — interface
- [SettingDropdownControl](SettingDropdownControl.md) — interface
- [SettingFileControl](SettingFileControl.md) — File-path input with a vault file suggester. Persists the selected file's
- [SettingFolderControl](SettingFolderControl.md) — Folder-path input with a vault folder suggester. Persists the selected folder's
- [SettingGroup](SettingGroup.md) — class
- [SettingGroupItem](SettingGroupItem.md) — A single item within a SettingDefinitionGroup — either a setting or a navigable page.
- [SettingNumberControl](SettingNumberControl.md) — Numeric text input. Persists a number; falls back to `defaultValue` (or `0`) if the
- [SettingPage](SettingPage.md) — Base class for a sub-page within a {@link SettingTab}. Use with the `page`
- [SettingSliderControl](SettingSliderControl.md) — interface
- [SettingTab](SettingTab.md) — class
- [SettingTextAreaControl](SettingTextAreaControl.md) — Multi-line text input. Persists a string.
- [SettingTextControl](SettingTextControl.md) — interface
- [SettingToggleControl](SettingToggleControl.md) — interface

## Modals & suggesters

Dialogs and type-ahead pickers.

- [Modal](Modal.md) — class
- [SuggestModal](SuggestModal.md) — class
- [FuzzySuggestModal](FuzzySuggestModal.md) — class
- [AbstractInputSuggest](AbstractInputSuggest.md) — Attach to an `<input>` element or a `<div contentEditable>` to add type-ahead
- [PopoverSuggest](PopoverSuggest.md) — Base class for adding a type-ahead popover.
- [ISuggestOwner](ISuggestOwner.md) — interface
- [FuzzyMatch](FuzzyMatch.md) — interface
- [HoverPopover](HoverPopover.md) — class
- [HoverParent](HoverParent.md) — interface
- [ConfirmationModal](ConfirmationModal.md) — A modal that asks the user to confirm an action. Use {@link addButton} to add
- [EditorSuggest](EditorSuggest.md) — class

## Commands, menus & notices

Command palette entries, context menus, and transient notifications.

- [Command](Command.md) — interface
- [Hotkey](Hotkey.md) — interface
- [Menu](Menu.md) — class
- [MenuItem](MenuItem.md) — class
- [MenuSeparator](MenuSeparator.md) — class
- [Notice](Notice.md) — Notification component. Use to present timely, high-value information.

## Events & keymap

Event registration/dispatch and keyboard handling.

- [Events](Events.md) — class
- [EventRef](EventRef.md) — interface
- [Keymap](Keymap.md) — Manages keymap lifecycle for different {@link Scope}s.
- [KeymapContext](KeymapContext.md) — interface
- [KeymapInfo](KeymapInfo.md) — interface
- [KeymapEventHandler](KeymapEventHandler.md) — interface
- [KeymapEventListener](KeymapEventListener.md) — Return `false` to automatically preventDefault
- [Scope](Scope.md) — A scope receives keyboard events and binds callbacks to given hotkeys.
- [UserEvent](UserEvent.md) — type

## Metadata cache

Parsed metadata about notes: links, headings, tags, frontmatter.

- [MetadataCache](MetadataCache.md) — Linktext is any internal link that is composed of a path and a subpath, such as 'My note#Heading'
- [CachedMetadata](CachedMetadata.md) — interface
- [FrontMatterCache](FrontMatterCache.md) — interface
- [FrontmatterLinkCache](FrontmatterLinkCache.md) — interface
- [LinkCache](LinkCache.md) — interface
- [EmbedCache](EmbedCache.md) — interface
- [HeadingCache](HeadingCache.md) — interface
- [TagCache](TagCache.md) — interface
- [ReferenceCache](ReferenceCache.md) — interface
- [BlockCache](BlockCache.md) — interface
- [SectionCache](SectionCache.md) — interface
- [ListItemCache](ListItemCache.md) — interface
- [FootnoteCache](FootnoteCache.md) — interface
- [FootnoteRefCache](FootnoteRefCache.md) — interface
- [ReferenceLinkCache](ReferenceLinkCache.md) — interface

## Networking & platform

HTTP requests, secret storage, and runtime platform detection.

- [RequestUrlParam](RequestUrlParam.md) — interface
- [RequestUrlResponse](RequestUrlResponse.md) — interface
- [RequestUrlResponsePromise](RequestUrlResponsePromise.md) — interface
- [SecretStorage](SecretStorage.md) — class
- [CapacitorAdapter](CapacitorAdapter.md) — Implementation of the vault adapter for mobile devices.

## Bases

The Bases query engine and its configuration-driven view options.

- [BasesAllOptions](BasesAllOptions.md) — BasesOptions and the associated sub-types are configuration-driven settings controls
- [BasesConfigFile](BasesConfigFile.md) — Represents the serialized format of a Bases query as stored in a `.base` file.
- [BasesConfigFileFilter](BasesConfigFileFilter.md) — type
- [BasesConfigFileView](BasesConfigFileView.md) — interface
- [BasesDropdownOption](BasesDropdownOption.md) — interface
- [BasesEntry](BasesEntry.md) — Represent a single "row" or file in a base.
- [BasesEntryGroup](BasesEntryGroup.md) — A group of BasesEntry objects for a given value of the groupBy key.
- [BasesFileOption](BasesFileOption.md) — A text input allowing selection of a file from in the vault.
- [BasesFolderOption](BasesFolderOption.md) — A text input allowing selection of a folder from in the vault.
- [BasesFormulaOption](BasesFormulaOption.md) — A text input supporting formula evaluation.
- [BasesMultitextOption](BasesMultitextOption.md) — interface
- [BasesOption](BasesOption.md) — interface
- [BasesOptionGroup](BasesOptionGroup.md) — Collapsible container for other ViewOptions.
- [BasesOptions](BasesOptions.md) — type
- [BasesProperty](BasesProperty.md) — A parsed version of the {@link BasesPropertyId}.
- [BasesPropertyId](BasesPropertyId.md) — The full ID of a property, used in the bases config file. The prefixed
- [BasesPropertyOption](BasesPropertyOption.md) — A dropdown menu allowing selection of a property.
- [BasesPropertyType](BasesPropertyType.md) — The three valid "sources" of a property in a Base.
- [BasesQueryResult](BasesQueryResult.md) — The BasesQueryResult contains all of the available information from executing the
- [BasesSliderOption](BasesSliderOption.md) — interface
- [BasesSortConfig](BasesSortConfig.md) — type
- [BasesTextOption](BasesTextOption.md) — interface
- [BasesToggleOption](BasesToggleOption.md) — interface
- [BasesView](BasesView.md) — Plugins can create a class which extends this in order to render a Base.
- [BasesViewConfig](BasesViewConfig.md) — The in-memory representation of a single entry in the "views" section of a Bases file.
- [BasesViewFactory](BasesViewFactory.md) — Implement this factory function in a {@link BasesViewRegistration} to create a
- [BasesViewRegistration](BasesViewRegistration.md) — Container for options when registering a new Bases view type.

## Other

Everything not covered by a domain above.

- [BlockSubpathResult](BlockSubpathResult.md) — interface
- [BooleanValue](BooleanValue.md) — {@link Value} wrapping a boolean.
- [CacheItem](CacheItem.md) — interface
- [CliData](CliData.md) — interface
- [CliFlag](CliFlag.md) — interface
- [CliFlags](CliFlags.md) — type
- [CliHandler](CliHandler.md) — type
- [ConfirmationButton](ConfirmationButton.md) — A button inside a {@link ConfirmationModal}'s button row. Clicking the button
- [Constructor](Constructor.md) — type
- [DateValue](DateValue.md) — {@link Value} wrapping a Date.
- [Debouncer](Debouncer.md) — interface
- [DurationValue](DurationValue.md) — {@link Value} wrapping a duration. Durations can be used to modify a {@link DateValue} or can
- [FileValue](FileValue.md) — {@link Value} wrapping a file in Obsidian.
- [FootnoteSubpathResult](FootnoteSubpathResult.md) — interface
- [FormulaContext](FormulaContext.md) — The context in which a formula is evaluated. In most cases, {@link BasesEntry} is the specific type to use.
- [FrontMatterInfo](FrontMatterInfo.md) — interface
- [HeadingSubpathResult](HeadingSubpathResult.md) — interface
- [HexString](HexString.md) — Hex strings are 6-digit hash-prefixed rgb strings in lowercase form.
- [HoverLinkSource](HoverLinkSource.md) — interface
- [HSL](HSL.md) — interface
- [HTMLValue](HTMLValue.md) — {@link Value} wrapping raw HTML.
- [IconName](IconName.md) — Can be any Lucide icon name or an internal icon name.
- [IconValue](IconValue.md) — {@link Value} wrapping a renderable icon.
- [ImageValue](ImageValue.md) — {@link Value} wrapping a path to an image resource in the vault.
- [Instruction](Instruction.md) — interface
- [LinkValue](LinkValue.md) — {@link Value} wrapping an internal wikilink.
- [ListedFiles](ListedFiles.md) — interface
- [ListValue](ListValue.md) — {@link Value} wrapping an array of Values. Values do not all need to be of the same type.
- [LivePreviewStateType](LivePreviewStateType.md) — The object stored in the view plugin {@link livePreviewState}
- [Loc](Loc.md) — Location within a Markdown document
- [MenuPositionDef](MenuPositionDef.md) — interface
- [Modifier](Modifier.md) — Mod = Cmd on MacOS and Ctrl on other OS
- [NotNullValue](NotNullValue.md) — Base type for all non-null {@link Values}.
- [NullValue](NullValue.md) — {@link Value} which represents null.
- [NumberValue](NumberValue.md) — {@link Value} wrapping a number.
- [ObjectValue](ObjectValue.md) — {@link Value} wrapping an object.
- [ObsidianProtocolData](ObsidianProtocolData.md) — interface
- [ObsidianProtocolHandler](ObsidianProtocolHandler.md) — type
- [OpenViewState](OpenViewState.md) — interface
- [PaneType](PaneType.md) — type
- [Point](Point.md) — interface
- [PopoverState](PopoverState.md) — enum
- [Pos](Pos.md) — Describes a text range in a Markdown document.
- [PrimitiveValue](PrimitiveValue.md) — Base type for {@link Values} which wrap a single primitive.
- [QueryController](QueryController.md) — Responsible for executing the Bases query and evaluating filters and formulas.
- [Reference](Reference.md) — Base interface for items that point to a different location.
- [RegExpValue](RegExpValue.md) — {@link Value} wrapping a RegExp pattern.
- [RelativeDateValue](RelativeDateValue.md) — {@link Value} wrapping a Date.
- [RenderContext](RenderContext.md) — Utility functions for rendering Values within the app.
- [RGB](RGB.md) — interface
- [SearchMatches](SearchMatches.md) — type
- [SearchMatchPart](SearchMatchPart.md) — Text position offsets within text file. Represents
- [SearchResult](SearchResult.md) — interface
- [SearchResultContainer](SearchResultContainer.md) — interface
- [Side](Side.md) — type
- [SplitDirection](SplitDirection.md) — type
- [Stat](Stat.md) — interface
- [StringValue](StringValue.md) — {@link Value} wrapping a string.
- [SubpathResult](SubpathResult.md) — interface
- [TagValue](TagValue.md) — {@link Value} wrapping an Obsidian tag.
- [Tasks](Tasks.md) — class
- [TooltipOptions](TooltipOptions.md) — interface
- [TooltipPlacement](TooltipPlacement.md) — type
- [UrlValue](UrlValue.md) — {@link Value} wrapping an external link.
- [Value](Value.md) — Container type for data which can expose functions for retrieving, comparing, and rendering the data.
- [ViewCreator](ViewCreator.md) — type
- [ViewState](ViewState.md) — interface
- [ViewStateResult](ViewStateResult.md) — interface

## Inheritance trees

Hierarchies derived from `extends`/`implements` (a node's children derive from it).

- [Value](Value.md)
  - [NotNullValue](NotNullValue.md)
    - [DateValue](DateValue.md)
      - [RelativeDateValue](RelativeDateValue.md)
    - [DurationValue](DurationValue.md)
    - [FileValue](FileValue.md)
    - [ListValue](ListValue.md)
    - [ObjectValue](ObjectValue.md)
    - [PrimitiveValue](PrimitiveValue.md)
      - [BooleanValue](BooleanValue.md)
      - [NumberValue](NumberValue.md)
      - [StringValue](StringValue.md)
        - [HTMLValue](HTMLValue.md)
        - [IconValue](IconValue.md)
        - [ImageValue](ImageValue.md)
        - [LinkValue](LinkValue.md)
        - [TagValue](TagValue.md)
        - [UrlValue](UrlValue.md)
    - [RegExpValue](RegExpValue.md)
  - [NullValue](NullValue.md)

- [BaseComponent](BaseComponent.md)
  - [ButtonComponent](ButtonComponent.md)
    - [ConfirmationButton](ConfirmationButton.md)
  - [ExtraButtonComponent](ExtraButtonComponent.md)
  - [SecretComponent](SecretComponent.md)
  - [ValueComponent](ValueComponent.md)
    - [AbstractTextComponent](AbstractTextComponent.md)
      - [SearchComponent](SearchComponent.md)
      - [TextAreaComponent](TextAreaComponent.md)
      - [TextComponent](TextComponent.md)
        - [MomentFormatComponent](MomentFormatComponent.md)
    - [ColorComponent](ColorComponent.md)
    - [DropdownComponent](DropdownComponent.md)
    - [ProgressBarComponent](ProgressBarComponent.md)
    - [SliderComponent](SliderComponent.md)
    - [ToggleComponent](ToggleComponent.md)

- [Component](Component.md)
  - [BasesView](BasesView.md)
  - [HoverPopover](HoverPopover.md)
  - [MarkdownPreviewEvents](MarkdownPreviewEvents.md)
  - [MarkdownRenderChild](MarkdownRenderChild.md)
    - [MarkdownRenderer](MarkdownRenderer.md)
      - [MarkdownPreviewView](MarkdownPreviewView.md)
  - [Menu](Menu.md)
  - [Plugin](Plugin.md)
  - [QueryController](QueryController.md)
  - [View](View.md)
    - [ItemView](ItemView.md)
      - [FileView](FileView.md)
        - [EditableFileView](EditableFileView.md)
          - [TextFileView](TextFileView.md)
            - [MarkdownView](MarkdownView.md)

- [Events](Events.md)
  - [MetadataCache](MetadataCache.md)
  - [SecretStorage](SecretStorage.md)
  - [Vault](Vault.md)
  - [Workspace](Workspace.md)
  - [WorkspaceItem](WorkspaceItem.md)
    - [WorkspaceLeaf](WorkspaceLeaf.md)
    - [WorkspaceParent](WorkspaceParent.md)
      - [WorkspaceFloating](WorkspaceFloating.md)
      - [WorkspaceMobileDrawer](WorkspaceMobileDrawer.md)
      - [WorkspaceSplit](WorkspaceSplit.md)
        - [WorkspaceContainer](WorkspaceContainer.md)
          - [WorkspaceRoot](WorkspaceRoot.md)
          - [WorkspaceWindow](WorkspaceWindow.md)
        - [WorkspaceSidedock](WorkspaceSidedock.md)
      - [WorkspaceTabs](WorkspaceTabs.md)

- [CacheItem](CacheItem.md)
  - [BlockCache](BlockCache.md)
  - [FootnoteCache](FootnoteCache.md)
  - [FootnoteRefCache](FootnoteRefCache.md)
  - [HeadingCache](HeadingCache.md)
  - [ListItemCache](ListItemCache.md)
  - [ReferenceCache](ReferenceCache.md)
    - [EmbedCache](EmbedCache.md)
    - [LinkCache](LinkCache.md)
  - [ReferenceLinkCache](ReferenceLinkCache.md)
  - [SectionCache](SectionCache.md)
  - [TagCache](TagCache.md)

- [BasesOption](BasesOption.md)
  - [BasesDropdownOption](BasesDropdownOption.md)
  - [BasesFileOption](BasesFileOption.md)
  - [BasesFolderOption](BasesFolderOption.md)
  - [BasesFormulaOption](BasesFormulaOption.md)
  - [BasesMultitextOption](BasesMultitextOption.md)
  - [BasesPropertyOption](BasesPropertyOption.md)
  - [BasesSliderOption](BasesSliderOption.md)
  - [BasesTextOption](BasesTextOption.md)
  - [BasesToggleOption](BasesToggleOption.md)

- [SettingControlBase](SettingControlBase.md)
  - [SettingColorControl](SettingColorControl.md)
  - [SettingDropdownControl](SettingDropdownControl.md)
  - [SettingFileControl](SettingFileControl.md)
  - [SettingFolderControl](SettingFolderControl.md)
  - [SettingNumberControl](SettingNumberControl.md)
  - [SettingSliderControl](SettingSliderControl.md)
  - [SettingTextAreaControl](SettingTextAreaControl.md)
  - [SettingTextControl](SettingTextControl.md)
  - [SettingToggleControl](SettingToggleControl.md)

- [Reference](Reference.md)
  - [FrontmatterLinkCache](FrontmatterLinkCache.md)

- [SettingDefinitionBase](SettingDefinitionBase.md)
  - [SettingDefinitionAction](SettingDefinitionAction.md)
  - [SettingDefinitionControl](SettingDefinitionControl.md)
  - [SettingDefinitionEmpty](SettingDefinitionEmpty.md)
  - [SettingDefinitionRender](SettingDefinitionRender.md)

- [Modal](Modal.md)
  - [ConfirmationModal](ConfirmationModal.md)
  - [SuggestModal](SuggestModal.md)
    - [FuzzySuggestModal](FuzzySuggestModal.md)

- [SubpathResult](SubpathResult.md)
  - [BlockSubpathResult](BlockSubpathResult.md)
  - [FootnoteSubpathResult](FootnoteSubpathResult.md)
  - [HeadingSubpathResult](HeadingSubpathResult.md)

- [KeymapInfo](KeymapInfo.md)
  - [KeymapContext](KeymapContext.md)
  - [KeymapEventHandler](KeymapEventHandler.md)

- [PopoverSuggest](PopoverSuggest.md)
  - [AbstractInputSuggest](AbstractInputSuggest.md)
  - [EditorSuggest](EditorSuggest.md)

- [TAbstractFile](TAbstractFile.md)
  - [TFile](TFile.md)
  - [TFolder](TFolder.md)
