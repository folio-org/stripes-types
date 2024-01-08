import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { BOOLEAN_OPERATORS } from '.';

type RowFormatter = (
  searchOption: string,
  query: string,
  comparator: string,
  bool: ValueOf<typeof BOOLEAN_OPERATORS>,
) => string;
type Row = {
  bool: ValueOf<typeof BOOLEAN_OPERATORS>;
  query: string;
  searchOption: string;
};

export interface AdvancedSearchProps {
  /** Render function. Accepts `resetRows` to clear `AdvancedSearch` state */
  children?: (props: { resetRows: () => void }) => ReactNode;
  /** One of the options in `searchOptions` that will be selected by default in all rows */
  defaultSearchOptionValue?: string;
  /** Object with shape `{ query, option }` - will be used to populate first row with default values */
  firstRowInitialSearch?: { query?: string; option?: string } | null;
  /** Show/hide search match option dropdown */
  hasMatchSelection?: boolean;
  /** Controls whether `Query` search option should be appended to search options list */
  hasQueryOption?: boolean;
  /** Callback fired when the user clicks the cancel button */
  onCancel: () => void;
  /** Callback fired when search is performed. Called with two arguments:
   * - `query`: formatted query string
   * - `rows`: array of non-empty rows
   */
  onSearch: (query: string, rows: Row[]) => void;
  /** Controls the visibility of the `<AdvancedSearch>` */
  open?: boolean;
  /** Function to construct the search query */
  queryBuilder?: (rows: Row[], rowFormatter: RowFormatter) => string;
  /** Function that combines boolean, query, and search option of each row. Used by `queryBuilder` to join rows */
  rowFormatter?: RowFormatter;
  /** Custom function to parse a query string into rows */
  queryToRow?: (input: { query: string }) => Row[];
  /** Search options; query will be automatically added as the first option */
  searchOptions: {
    label: string;
    value: string;
    id?: string;
  }[];
}

/**
 * Provides advanced search functionality - user-friendly ability to construct a complex query with boolean conditions.
 *
 * @example
 * ```
 * // in component body
 * const searchOptions = [{
 *   id: 'keyword',
 *   label: 'Keyword',
 *   value: 'keyword',
 * }, {
 *   id: 'name',
 *   label: 'Name',
 *   value: 'name',
 * }];
 *
 * const keywordOption = 'keyword';
 *
 * const firstRowInitialSearch = {};
 *
 * <AdvancedSearch
 *   open={isOpen}
 *   searchOptions={searchOptions}
 *   defaultSearchOptionValue={keywordOption}
 *   firstRowInitialSearch={firstRowInitialSearch}
 *   onSearch={handleSearch}
 *   onCancel={handleCancel}
 * />
 * ```
 */
export default function AdvancedSearch(props: AdvancedSearchProps): JSX.Element;
