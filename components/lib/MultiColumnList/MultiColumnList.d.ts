import {
  Component,
  CSSProperties,
  FunctionComponent,
  ReactNode,
  RefObject,
  UIEventHandler,
} from 'react';
import { RequireAllOrNone } from 'type-fest';
import { HotKeysProps } from '../HotKeys';
import { MultiColumnListRowFormatterProps } from './defaultRowFormatter';

export type ColumnWidth =
  | CSSProperties['width']
  | {
      min: number;
      max?: number;
    };
export interface PositionObject {
  /** Number of pixels from the top of the screen to add above the item being scrolled to */
  localClientTop: number;
  /** Selector to match the row, likely something like `[aria-rowindex="${rowIndex}"]` */
  selector: string;
}

export type PagingType = 'click' | 'none' | 'prev-next' | 'scroll';

export interface MultiColumnListBaseProps<DataShape, OmittedColumns extends string> {
  /** If the list should fill the containing element (e.g. filling the full width/height of a pane) */
  autosize?: boolean;
  /**
   * Adds a prefix to column header IDs (otherwise MCLs with conflicting column
   * header names in the same view could cause issues)
   */
  columnIdPrefix?: string;
  /** Maps data fields to labels for column headers */
  columnMapping?: Record<keyof Omit<DataShape, OmittedColumns>, ReactNode>;
  /** If a column should show overflow */
  columnOverflow?: Record<keyof Omit<DataShape, OmittedColumns>, boolean>;
  /** Set widths for columns, either as direct widths or min/max pixels */
  columnWidths?: Partial<Record<keyof Omit<DataShape, OmittedColumns>, ColumnWidth>>;
  /** A ref to the MCL's container */
  containerRef?: RefObject<HTMLDivElement>;
  /** The list's data */
  contentData: DataShape[];
  /** Custom functions that render the nodes for each column */
  formatter?: Record<keyof Omit<DataShape, OmittedColumns>, (item: DataShape) => ReactNode>;
  /** Replaces the default classes with the result of this function */
  getCellClass?: (
    defaultClasses: string,
    rowData: DataShape,
    header: keyof Omit<DataShape, OmittedColumns>,
  ) => string;
  /** Adds additional classes to the default header's classes */
  getHeaderCellClass?: (columnName: keyof Omit<DataShape, OmittedColumns>) => string;
  /** Replaces the default row container classes with the result of this function */
  getRowContainerClass?: (defaultClasses: string) => string;
  /** Adds horizontal margin to the rows and header */
  hasMargin?: boolean;
  /**
   * TODO: unknown, see
   * https://folio-project.slack.com/archives/C210UCHQ9/p1655355343636399?thread_ts=1589556430.060600&cid=C210UCHQ9
   */
  headerMetadata?: unknown;
  /** Adds a class to the header row */
  headerRowClass?: string;
  /** Set the height of the container */
  height?: CSSProperties['height'];
  /** Add custom hotkeys to the list */
  hotKeys?: Pick<HotKeysProps, 'keyMap' | 'handlers'>;
  /** Override the default id for the MCL */
  id?: string;
  /** Function to pass the instance to */
  instanceRef?: (instance: MultiColumnList<DataShape, OmittedColumns>) => void;
  /** If rows should display as hoverable/clickable */
  interactive?: boolean;
  /** The message to display if the MCL is empty */
  isEmptyMessage?: ReactNode;
  /** Function to determine if a row should show as selected */
  isSelected?: (args: { item: DataShape; rowIndex: number }) => boolean;
  /** If a loading icon should be shown at the bottom of the list */
  loading?: boolean;
  /** A maximum height for the MCL, in pixels */
  maxHeight?: number;
  /** The minimum height of any row, in pixels */
  minimumRowHeight?: number;
  /** Callback for a row being focused */
  onMarkPosition?: (itemToView: PositionObject) => void;
  /** Callback to request more data to be loaded */
  onNeedMoreData?: (askAmount: number, index: number) => void;
  /** Callback for when a row is clicked */
  onRowClick?: (e: MouseEvent | KeyboardEvent, row: DataShape) => void;
  /** Callback for when the list is scrolled */
  onScroll?: UIEventHandler<HTMLDivElement>;
  /** The amount to request at a time from `onNeedMoreData` */
  pageAmount?: number;
  /** A custom formatter for an entire row */
  rowFormatter?: FunctionComponent<MultiColumnListRowFormatterProps<DataShape>>;
  /** Keys in the data that should not be rendered */
  rowMetadata?: OmittedColumns[];
  /**
   * A function that can force a row to re-render by changing its return.  This return is passed
   * directly to a pure row's props, so any change will cause a re-render.  The actual value does
   * not matter
   */
  rowUpdater?: (rowData: DataShape, rowIndex: number) => unknown;
  /** Override styles for selected rows */
  selectedClass?: string;
  /**
   * The selected row, should match a row from {@link contentData}
   * @deprecated use {@link isSelected} instead
   */
  selectedRow?: DataShape;
  /** Which way a sorted column is sorted */
  sortDirection?: 'ascending' | 'descending';
  /** The column being styled as sorted */
  sortedColumn?: keyof Omit<DataShape, OmittedColumns>;
  /** Pins the first column in place so that it will remain visible when scrolled out of view. */
  stickyFirstColumn?: boolean;
  /** Pins the last column in place so that it will remain visible when scrolled out of view. */
  stickyLastColumn?: boolean;
  /** If alternating rows should have different colors, resulting in a striped appearance */
  striped?: boolean;
  /** The total number of rows, for virtualization or pagination */
  totalCount?: number;
  /** For large tables, do not render all rows into the DOM at once */
  virtualize?: boolean;
  /** A list of columns that should be rendered, takes precedence over {@link rowMetadata} */
  visibleColumns?: (keyof Omit<DataShape, OmittedColumns>)[];
  /** Set the MCL's width */
  width?: number;
  /** If cells should wrap within themselves */
  wrapCells?: boolean;

  /** Columns to disallow clicking */
  nonInteractiveHeaders?: (keyof Omit<DataShape, OmittedColumns>)[];
  /** Callback for when a column is clicked */
  onHeaderClick?: (
    e: MouseEvent,
    meta: { name: keyof Omit<DataShape, OmittedColumns>; alias: ReactNode },
  ) => void;
}

export type MultiColumnListPagingTypes =
  | {
      pagingType: 'click';
      /** If there is no more data available */
      dataEndReached?: boolean;
      /** A custom label for the load more button */
      pagingButtonLabel?: ReactNode;
    }
  | {
      pagingType: 'prev-next';
      pagingCanGoNext?: boolean;
      pagingCanGoPrevious?: boolean;
      hidePageIndices?: boolean;
      /** optional prop for manually controlling the page numbers indicated on the prev/next controls */
      pagingOffset? : number;
    }
  | {
      pagingType?: 'click' | 'scroll';
    };

export type MultiColumnListMarkProps = RequireAllOrNone<
  {
    /** Scroll to a given item */
    itemToView: PositionObject;
    /** Callback for when a row from itemToView could not be focused */
    onMarkReset?: () => void;
  },
  'itemToView' | 'onMarkReset'
>;

export type MultiColumnListProps<
  DataShape,
  OmittedColumns extends string,
> = MultiColumnListBaseProps<DataShape, OmittedColumns> &
  MultiColumnListPagingTypes &
  MultiColumnListMarkProps;

/**
 * Renders an array of data objects as a table where each object is a row and each property of the
 * objects is a column. Capable of virtualizing rows in large collections of data.
 * @example
 * const catalogResults = [
 *     {title:'Microbiology Today', author:'James Edward'},
 *     {title:'Orange Book', author:'Philip Ramos'},
 * ]
 * <MultiColumnList contentData={catalogResults} />
 * @example
 * <MultiColumnList
 *   contentData={...}
 *   visibleColumns={['actionDate', 'action', 'dueDate', 'itemStatus', 'source']}
 *   columnMapping={{
 *     action: <FormattedMessage id="ui-users.loans.columns.action" />,
 *     actionDate: <FormattedMessage id="ui-users.loans.columns.actionDate" />,
 *     dueDate: <FormattedMessage id="ui-users.loans.columns.dueDate" />,
 *     itemStatus: <FormattedMessage id="ui-users.loans.columns.itemStatus" />,
 *     source: <FormattedMessage id="ui-users.loans.columns.source" />,
 *   }}
 * />
 */
export default class MultiColumnList<
  DataShape,
  OmittedColumns extends string = '',
> extends Component<MultiColumnListProps<DataShape, OmittedColumns>> {}
