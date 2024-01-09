import { ReactNode } from 'react';

export interface ColumnManagerProps {
  /** The render-prop function that will receive the relevant props for implementing toggleable columns */
  children: (props: {
    /** An array of visible column keys that can be passed directly down to the `<MultiColumnList>` */
    visibleColumns: string[];
    /** Renders a <MenuSection> that wraps renderCheckboxes for toggling columns. This makes it easy to implement inside e.g. a pane action menu. */
    renderColumnsMenu: ReactNode;
    /** A method that toggles the visiblity for a given column – e.g. `toggleColumn('email')` */
    toggleColumn: (key: string) => void;
  }) => ReactNode;
  /** An object that maps keys to labels. The order of the keys will determine the default order of the columns. */
  columnMapping: Record<string, ReactNode>;
  /** An array of keys to exclude from the list of toggleable columns */
  excludeKeys?: string[];
  /**
   * The unique ID is used to generate the storage key for persisting the visible columns in sessionStorage.
   * The ID will also be used as a prefixed ID for any UI that is passed down to the render-prop function.
   */
  id: string;
  /** Whether or not to persist the visible columns in sessionStorage */
  persist?: boolean;
}

/**
 * A render-prop component for implementing toggleable columns in a `<MultiColumnList>`.
 *
 * @example
 * ```
 * const columnMapping = {
 *     status: 'Status',
 *     name: 'Name',
 *     barcode: 'Barcode',
 *     username: 'Username',
 *     email: 'Email'
 * };
 *
 * <ColumnManager
 *     id="users-list-columns" // Required
 *     columnMapping={columnMapping} // Required
 *     excludeKeys={['name']} // Exclude these keys from being toggleable
 * >
 *     {({ visibleColumns, renderColumnsMenu, toggleColumn }) => {
 *         // Render UI
 *     }}
 * </ColumnManager>
 * ```
 */
export default function ColumnManager(props: ColumnManagerProps): JSX.Element;
