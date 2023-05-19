import {
  AriaAttributes,
  CSSProperties,
  FunctionComponent,
  ReactEventHandler,
  ReactNode,
} from 'react';
import { RequireAllOrNone } from 'type-fest';

export interface DropdownMenuBaseProps extends AriaAttributes {
  /** Menu contents */
  children: ReactNode;
  /** A minimum width for the menu */
  minWidth?: CSSProperties['minWidth'];
  /** Callback for when an item is selected */
  onSelect?: ReactEventHandler<HTMLElement>;
  /** Callback for when an item is selected */
  onSelectItem?: ReactEventHandler<HTMLElement>;
  /** Callback for when an item is selected */
  overrideStyle?: Partial<CSSProperties>;
  /** If the menu should be pulled to the right side */
  pullRight?: boolean;
  /** Force a given width */
  width?: CSSProperties['width'];
}

export interface DropdownMenuControlledProps {
  /** Callback for when the menu should toggle, for external state control */
  onToggle: ReactEventHandler<HTMLElement>;
  /** If the menu is open, for external state control */
  open?: boolean;
}

export type DropdownMenuProps = DropdownMenuBaseProps &
  RequireAllOrNone<DropdownMenuControlledProps>;

/**
 * Renders a menu for a dropdown
 * @example
 * <Dropdown
 *   open={this.state.isDropdownOpen}
 *   onToggle={this.onDropdownToggle}
 * >
 *   <DropdownMenu data-role="toggle">
 *     Toggle dropdown
 *   </DropdownMenu>
 *   <DropdownMenu data-role="menu">
 *     <span>This is our dropdown</span>
 *   </DropdownMenu>
 * </Dropdown>
 */
declare const DropdownMenu: FunctionComponent<DropdownMenuProps>;
export default DropdownMenu;
