import { FunctionComponent, ReactNode } from 'react';
import { ViewportSize } from './ViewportSize';

export interface RowProps extends Omit<React.HTMLProps<HTMLDivElement>, 'start'> {
  reverse?: boolean,
  start?: ViewportSize,
  center?: ViewportSize,
  end?: ViewportSize,
  top?: ViewportSize,
  middle?: ViewportSize,
  bottom?: ViewportSize,
  around?: ViewportSize,
  between?: ViewportSize,
  /** Applies a custom class name */
  className?: string,
  /** Change the tag name of the component (`div` by default) */
  tagName?: string,
  /** The content of the `<Row>` */
  children?: ReactNode
}

declare const Row: FunctionComponent<RowProps>;
export default Row;
