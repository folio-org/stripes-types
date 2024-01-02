import { FunctionComponent, ReactNode } from 'react';

import { ColumnSize } from './ColumnSize';
import { ViewportSize } from './ViewportSize';

export interface ColProps extends React.HTMLProps<HTMLDivElement> {
  xs?: ColumnSize,
  sm?: ColumnSize,
  md?: ColumnSize,
  lg?: ColumnSize,
  xl?: ColumnSize,
  xsOffset?: number,
  smOffset?: number,
  mdOffset?: number,
  lgOffset?: number,
  xlOffset?: number,
  first?: ViewportSize,
  last?: ViewportSize,
  /** Applies a custom class name */
  className?: string,
  /** Change the tag name of the component (`div` by default) */
  tagName?: string,
  /** The content of the `<Col>` */
  children?: ReactNode,
}

declare const Col: FunctionComponent<ColProps>;
export default Col;
