import { AdvancedSearchProps, Row } from '../../AdvancedSearch';

export default function useAdvancedSearch(opts: {
  /** One of the options in `searchOptions` that will be selected by default in all rows */
  defaultSearchOptionValue: string;
  /** Object with shape `{ query, option }` - will be used to populate first row with default values */
  firstRowInitialSearch: AdvancedSearchProps['firstRowInitialSearch'];
  /** Callback fired when the user clicks the cancel button */
  onCancel?: () => void;
  /** Callback fired when search is performed. Called with two arguments:
   * - `query`: formatted query string
   * - `rows`: array of non-empty rows
   */
  onSearch?: (query: string, rows: Row[]) => void;
  /** Function to construct the search query */
  queryBuilder?: AdvancedSearchProps['queryBuilder'];
  /** Function that combines boolean, query, and search option of each row. Used by `queryBuilder` to join rows */
  rowFormatter?: AdvancedSearchProps['rowFormatter'];
  /** Custom function to parse a query string into rows */
  queryToRow?: AdvancedSearchProps['queryToRow'];
  /** Search options; query will be automatically added as the first option */
  searchOptions: AdvancedSearchProps['searchOptions'];
  /** Controls whether `Query` search option should be appended to search options list */
  hasQueryOption?: boolean;
  /** Controls the visibility of the `<AdvancedSearch>` */
  open?: boolean;
}): {
  handleCancel: () => void;
  handleSearch: () => void;
  onChange: (index: number, key: string, value: string) => void;
  resetRows: () => void;
  rowState: Row[];
  searchOptionsWithQuery: AdvancedSearchProps['searchOptions'];
  showEmptyFirstRowMessage: boolean;
  filledRows: Row[];
  query: string;
};
