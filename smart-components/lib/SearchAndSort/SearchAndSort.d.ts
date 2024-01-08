import { ChangeEventHandler, Component, ComponentType, EventHandler, ReactNode, Ref } from 'react';
import {
  AdvancedSearchProps,
  FilterGroupsConfig,
  FilterGroupsProps,
  FilterGroupsState,
  MultiColumnListProps,
} from '../../../components';
import { DropdownMenuFunction } from '../../../components/lib/Dropdown/Dropdown';
import { PaneHeaderDefaultProps } from '../../../components/lib/PaneHeader/PaneHeader';
import { StripesType } from '../../../core';
import { ColumnManagerProps } from '../ColumnManager';
import {
  ConnectedSource,
  ConnectedSourceProps,
  StripesConnectedSourceProps,
} from './ConnectedSource';
import { NsParamsType } from './nsQueryFunctions';

export type SearchAndSortProps<
  EditAndViewProps = Record<string, never>,
  RecordType = Record<string, unknown>,
  PreMassagedRecordType = RecordType,
  CustomFilterRenderType = unknown,
> = ConnectedSourceProps &
  StripesConnectedSourceProps & {
    /** Customizes the pane header's action menu */
    actionMenu?: (
      props: Parameters<DropdownMenuFunction>[0] & Partial<ColumnManagerProps>,
    ) => ReactNode;
    /** Value of advanced search index option. Tells `<SearchAndSort>` which index to set after searching by Advanced Search */
    advancedSearchIndex?: string;
    /** Array of options for Advanced Search component. If empty, Advanced Search will not be rendered. */
    advancedSearchOptions?: AdvancedSearchProps['searchOptions'];
    /** Custom query builder for Advanced Search */
    advancedSearchQueryBuilder?: AdvancedSearchProps['queryBuilder'];
    /** If the `SearchField` should be auto-focused on mount */
    autofocusSearchField?: boolean;
    /** Optional string to customize the path which should be used after performing a search */
    basePath?: string;
    /** If true, don't show/navigate to record information on selection */
    browseOnly?: boolean;
    /** Get a ref to the underlying pane's title */
    paneTitleRef?: PaneHeaderDefaultProps['paneTitleRef'];
    /** Additional props for the `<ColumnManager>` */
    columnManagerProps?: Partial<ColumnManagerProps>;
    /** The column mapping for the `<MultiColumnList>` */
    columnMapping: MultiColumnListProps<RecordType, never>['columnMapping'];
    /** The column widths for the `<MultiColumnList>` */
    columnWidths: MultiColumnListProps<RecordType, never>['columnWidths'];
    /** The path to navigate to when the "New" button is clicked */
    createRecordPath?: string;
    /** A component that will be rendered in PaneSubHeader instead of default. */
    customPaneSubText?: ReactNode;
    /** A component that will be rendered in the PaneSubHeader (after `customPaneSubText`). */
    customPaneSub?: ReactNode;
    /** Additional props to pass to the `editRecordComponent` and `viewRecordComponent` */
    detailProps?: EditAndViewProps;
    /** Disables filters for the `<FilterGroups>` */
    disableFilters?: FilterGroupsProps['disableNames'];
    /** If true, new records cannot be created */
    disableRecordCreation?: boolean;
    /** The component used to edit an existing record.  Can accept additional props via `detailProps` (type `EditAndViewProps` from generic) */
    editRecordComponent?: ComponentType<
      EditAndViewProps & {
        stripes: StripesType;
        id: string;
        initialValues?: Partial<RecordType>;
        connectedSource: ConnectedSource;
        parentResources: ConnectedSourceProps['parentResources'];
        parentMutator?: StripesConnectedSourceProps['parentMutator'];
        onSubmit: (newRecord: PreMassagedRecordType) => unknown;
        onCancel: (e?: Event) => void;
      }
    >;
    /** Extra parameters to remove from the URL after the search is submitted and the user's search is cleared */
    extraParamsToReset?: Record<string, unknown>;
    /** Callback for when the user changes a filter in the default `<FilterGroups>`. Requires renderFilters to NOT be provided */
    filterChangeCallback?: (state: FilterGroupsState) => void;
    /** Configuration for `<FilterGroups>`. Requires renderFilters to NOT be provided */
    filterConfig?: FilterGroupsConfig;
    /** Newly created records are displayed as soon as they are created. Usually that is as soon as the record itself exists, but in some cases it is not until some other operation has completed -- for example, new user records are not ready to be displayed until their permissions have been added. In such situations, this property may be set to the name of the resource which must have completed its operations before the record is ready. */
    finishedResourceName?: string;
    /** Customize classes for the underlying `<MultiColumnList>` */
    getCellClass?: MultiColumnListProps<RecordType, never>['getCellClass'];
    /** An optional function to return connected helper component implementation */
    getHelperComponent?: (helperName: string) => ComponentType;
    /** An optional function which can be used to return helper's resource path dynamically */
    getHelperResourcePath?: (helperName: string, id: string) => string;
    /** If the "New" button should be displayed */
    hasNewButton?: boolean;
    /** If row-level click handlers should be enabled */
    hasRowClickHandlers?: boolean;
    /** If page indices should be hidden */
    hidePageIndices?: boolean;
    /** Search index dropdown element ref */
    indexRef?: Ref<HTMLElement>;
    /** Initial filter state; also used when resetting to the initial state */
    initialFilters?: string;
    /** The number of records to fetch when a new search is executed (including the null search that is run when the module starts). */
    initialResultCount?: number;
    /** Reference to search query input element */
    inputRef?: Ref<HTMLElement>;
    /** Type of search box */
    inputType?: 'text' | 'textarea';
    /** If the count of items should be hidden */
    isCountHidden?: boolean;
    /** Take a record create/edit form and turn it into a "proper" record */
    massageNewRecord?: (record: PreMassagedRecordType) => RecordType;
    /** If provided, specifies that maximum number of sort-keys that should be remembered for "stable sorting". Defaults to 2 if not specified. */
    maxSortKeys?: number;
    /** Initial values to use when creating a new record */
    newRecordInitialValues?: Partial<RecordType>;
    /** Permissions required to create a new record */
    newRecordPerms?: string;
    /** A message to show before a search has been submitted */
    notLoadedMessage?: ReactNode;
    /** Columns which should not be clickable */
    nonInteractiveHeaders?: MultiColumnListProps<RecordType, never>['nonInteractiveHeaders'];
    /** Namespace parameters */
    nsParams?: NsParamsType;
    /** Machine-readable name of the object being managed, e.g. `user` */
    objectName: string;
    /** Callback for when the user selects a different index */
    onChangeIndex?: ChangeEventHandler;
    /** Callback for when the new record layer is closed */
    onCloseNewRecord?: EventHandler<any>;
    /** Callback for when the component will unmount */
    onComponentWillUnmount?: (
      props: SearchAndSortProps<
        EditAndViewProps,
        RecordType,
        PreMassagedRecordType,
        CustomFilterRenderType
      >,
    ) => void;
    /** Creates a new record */
    onCreate?: (record: RecordType) => unknown;
    /** Callback for when the detail record pane is dismissed */
    onDismissDetail?: () => void;
    /** Callback for filters changed from the custom `renderFilters` prop */
    onFilterChange?: (result: CustomFilterRenderType) => void;
    /** Callback for when all filters are reset/cleared */
    onResetAll?: () => void;
    /** Extends search functionality; called before search is performed */
    onSubmitSearch?: () => void;
    /** Optional function to override the default action when selecting a row (which displays the full record). May be used, for example, when running one module embedded in another, as when ui-checkin embeds an instance of ui-users to select the user for whom items are being checked out. */
    // can only guarantee `id` is present
    onSelectRow?: (
      e: MouseEvent | KeyboardEvent | null | undefined,
      record: Partial<RecordType> & { id: string },
    ) => void;
    /** Enable or disable the "Next" button */
    pagingCanGoNext?: boolean;
    /** Enable or disable the "Previous" button */
    pagingCanGoPrevious?: boolean;
    /** Amount to display per page */
    pageAmount?: MultiColumnListProps<RecordType, never>['pageAmount'];
    /** Type of paging for the underlying `<MultiColumnList>` */
    pagingType?: MultiColumnListProps<RecordType, never>['pagingType'];
    /** Custom path to use for viewing a record detail */
    path?: string;
    /** Custom filters to render */
    renderFilters?: (callback: (result: CustomFilterRenderType) => void) => ReactNode;
    /** Custom element to render above the filters */
    renderNavigation?: () => ReactNode;
    /** The amount of records to load when getting close to the bottom */
    resultCountIncrement: number;
    /** Use a custom translation key for the result count message */
    resultCountMessageKey?: string;
    /** Custom row formatter */
    resultRowFormatter?: MultiColumnListProps<RecordType, never>['rowFormatter'];
    /** Custom logic to highlight a row as selected in the `<MultiColumnList>` */
    resultRowIsSelected?: MultiColumnListProps<RecordType, never>['isSelected'];
    /** Sets the `itemToView` prop of the `<MultiColumnList>` */
    resultsCachedPosition?: MultiColumnListProps<RecordType, never>['itemToView'];
    /** Custom formatter for the `<MultiColumnList>` */
    resultsFormatter?: MultiColumnListProps<RecordType, never>['formatter'];
    /** Sets the MCL key, can be used to force a re-render */
    resultsKey?: string;
    /** Custom `onMarkPosition` on the underlying `<MultiColumnList>` */
    resultsOnMarkPosition?: MultiColumnListProps<RecordType, never>['onMarkPosition'];
    /** Custom function to request more results */
    resultsOnNeedMore?: (args: {
      records: RecordType[];
      source: ConnectedSource;
      direction?: unknown;
      index: number;
      firstIndex?: unknown;
      askAmount: number;
    }) => void;
    /** Custom `onMarkReset` on the underlying `<MultiColumnList>` */
    resultsOnResetMarkedPosition?: MultiColumnListProps<RecordType, never>['onMarkReset'];
    /** Custom `stickyFirstColumn` on the underlying `<MultiColumnList>` */
    resultsStickyFirstColumn?: MultiColumnListProps<RecordType, never>['stickyFirstColumn'];
    /** Custom `stickyLastColumn` on the underlying `<MultiColumnList>` */
    resultsStickyLastColumn?: MultiColumnListProps<RecordType, never>['stickyLastColumn'];
    /** Custom `virtualize` on the underlying `<MultiColumnList>` */
    resultsVirtualize?: MultiColumnListProps<RecordType, never>['virtualize'];
    /** Indexes which the application can search in. Presence of this property causes a dropdown to appear offering a choice of indexes */
    searchableIndexes?: {
      label: string;
      value: string;
      disabled?: boolean;
    }[];
    /** An unselectable placeholder for use with `searchableIndexes` */
    searchableIndexesPlaceholder?: string;
    /** Custom label for the search field */
    searchFieldButtonLabel?: ReactNode;
    /** The currently selected index (for use with `searchableIndexes`) */
    selectedIndex?: string;
    /** If the details should be shown automatically if a search has only one result */
    showSingleResult?: boolean;
    /** If provided, specifies the columns that can be sorted */
    sortableColumns?: string[];
    /** Enable or disable syncing the URL `query` with the query input value */
    syncQueryWithUrl?: boolean;
    /** Results pane title */
    title?: ReactNode;
    /** Validates search query before submission. Submission will be prevented if this returns false. */
    validateSearchOnSubmit?: (searchTerm: string) => boolean;
    /** The component used to edit an existing record.  Can accept additional props via `detailProps` (type `EditAndViewProps` from generic) */
    viewRecordComponent?: ComponentType<
      EditAndViewProps &
        // gets all our props, too
        SearchAndSortProps<
          EditAndViewProps,
          RecordType,
          PreMassagedRecordType,
          CustomFilterRenderType
        > & {
          stripes: StripesType;
          paneWidth: '44%';
          parentResources: ConnectedSourceProps['parentResources'];
          connectedSource: ConnectedSource;
          parentMutator: StripesConnectedSourceProps['parentMutator'];
          onClose: () => void;
          onEdit: (e?: Event) => void;
          editLink: string;
          onCloseEdit: (e?: Event) => void;
          tagsToggle: () => void;
        }
    >;
    /** Gets a link to view a record at. Used in lieu of `viewRecordComponent` */
    viewRecordPathById?: (id: string) => string;
    /** Permissions required to view a record */
    viewRecordPerms: string;
    /** Columns to display */
    visibleColumns?: MultiColumnListProps<RecordType, never>['visibleColumns'];
  };

export default class SearchAndSort extends Component<SearchAndSortProps> {}
