import { ReactNode } from 'react';

export interface ColumnManagerMenuProps {
  /** An object that maps keys to labels */
  columnMapping: Record<string, ReactNode>;
  /** An array of keys to exclude from the list of columns */
  excludeColumns?: string[];
  /** Unique ID */
  prefix: string;
  /** An array of visible column keys */
  visibleColumns: string[];
}

/**
 * Renders an action menu section for toggling columns. Provided by `<ColumnManager>` as `renderColumnsMenu`.
 */
export default function ColumnManagerMenu(props: ColumnManagerMenuProps): JSX.Element;
