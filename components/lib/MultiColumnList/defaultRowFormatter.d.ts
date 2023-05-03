import {
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';

export interface MultiColumnListRowFormatterProps<DataShape> {
  cells: ReactNode[];
  labelStrings:
    | string[]
    | ((props: MultiColumnListRowFormatterProps<DataShape>) => string[]);
  rowClass: string;
  rowData: DataShape;
  rowIndex: number;
  rowProps: {
    onClick: MouseEventHandler;
    onKeyDown: KeyboardEventHandler;
    style: CSSProperties;
    'data-row-inner': number;
  };
  rowWidth: number;
}

export default function defaultRowFormatter<
  DataShape = Record<string, unknown>
>(props: MultiColumnListRowFormatterProps<DataShape>): JSX.Element;
