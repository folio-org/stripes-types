import { CSSProperties, FunctionComponent, ReactNode } from 'react';

export interface FilterControlGroupProps {
  children: ReactNode;
  label: string;
  style?: CSSProperties;
}

declare const FilterControlGroup: FunctionComponent<FilterControlGroupProps>;
export default FilterControlGroup;
