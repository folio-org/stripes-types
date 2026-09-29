import { AppIconProps } from '../../AppIcon';

export interface NavButtonProps {
  ariaLabel?: string;
  badge?: string | number;
  badgeColor?: 'default' | 'primary' | 'red';
  badgeSize?: 'small' | 'medium';
  className?: string;
  href?: string;
  icon?: React.JSX.Element;
  iconData?: AppIconProps['icon'];
  iconKey?: string;
  id?: string;
  innerClassName?: string;
  label?: React.ReactNode;
  labelClassName?: string;
  noSelectedBar?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  open?: boolean;
  selected?: boolean;
  title?: string;
  to?: string;
}

declare const NavButton: React.ForwardRefExoticComponent<NavButtonProps & React.RefAttributes<unknown>>;

export default NavButton;
