import { CSSProperties, FunctionComponent, ReactNode } from 'react';

export interface PluggableProps {
  /** The plugin to load, i.e. `query-builder` for `@folio/plugin-query-builder` */
  type: string;
  /** The plugin's props */
  [key: string]: any;
}

/**
 * Loads a plugin from the Stripes context
 */
declare const Pluggable: FunctionComponent<PluggableProps>;
export default Pluggable;
