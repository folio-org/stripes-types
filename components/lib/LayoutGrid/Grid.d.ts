import { FunctionComponent, ReactNode } from 'react';

export interface GridProps {
  /** whether to apply the container-fluid CSS class */
  fluid?: boolean,
  /** Applies a custom class name */
  className?: string,
  /** Change the tag name of the component (`div` by default) */
  tagName?: string,
  /** The content of the `<Grid>` */
  children?: ReactNode
}

declare const Grid: FunctionComponent<GridProps>;
export default Grid;
