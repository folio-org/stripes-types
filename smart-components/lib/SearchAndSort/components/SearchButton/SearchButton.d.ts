import { MouseEventHandler } from 'react';
import { ButtonProps } from '../../../../../components';

export type SearchButtonProps = Partial<ButtonProps> & {
  badge?: string | number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  visible: boolean;
};

export default function SearchButton(props: SearchButtonProps): JSX.Element;
