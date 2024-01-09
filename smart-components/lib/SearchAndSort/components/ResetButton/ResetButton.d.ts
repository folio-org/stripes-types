import { MouseEventHandler, ReactNode } from 'react';
import { ButtonProps } from '../../../../../components';

export type ResetButtonProps = Partial<ButtonProps> & {
  className?: string;
  disabled?: boolean;
  id?: string;
  label?: ReactNode;
  onClick: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export default function ResetButton(props: ResetButtonProps): JSX.Element;
