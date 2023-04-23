import { FunctionComponent, ReactNode } from 'react';

export interface LabelProps {
  children: ReactNode;
  className?: string;
  id?: string;
  readOnly?: boolean;
  required?: boolean;
  tagName?: string;
}

export const Label: FunctionComponent<LabelProps>;
export default Label;
