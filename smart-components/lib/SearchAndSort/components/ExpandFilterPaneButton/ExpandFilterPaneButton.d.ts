import { MouseEventHandler } from 'react';

export interface ExpandFilterPaneButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  filterCount?: number;
}

export default function ExpandFilterPaneButton(props: ExpandFilterPaneButtonProps): JSX.Element;
