import { FunctionComponent, ReactNode } from 'react';
import { IconButtonProps } from '../IconButton';
import { PopoverProps } from '../Popover';
import { PopperProps } from '../Popper';

export interface InfoPopoverProps extends Partial<PopperProps> {
  /** If the link button can be clicked */
  allowAnchorClick?: boolean;
  /** The popover's content */
  content?: ReactNode;
  /** The label for the link button */
  buttonLabel?: ReactNode;
  /** The destination for the button inside the popover */
  buttonHref?: string;
  /** The button's `target`, default `_blank` */
  buttonTarget?: string;
  /** Custom class for the content inside the Popover */
  contentClass?: string;
  /** The icon's size */
  iconSize?: IconButtonProps['size'];
  /** If the popover should be hidden on anchor button click */
  hideOnButtonClick?: boolean;
  /** Render a custom trigger button */
  renderTrigger?: PopoverProps['renderTrigger'];
  /** Pass additional props to the created IconButton */
  buttonProps?: Partial<IconButtonProps>;
  /** Pass additional props to the underlying Popper */
  popperProps?: Partial<PopperProps>;
}

/**
 * Display a small information icon which can be toggled by clicking on it.
 *
 * @example
 * <InfoPopover
 *   allowAnchorClick
 *   content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 *   buttonLabel="Read more"
 *   buttonHref="https://wiki.folio.org/"
 *   buttonTarget="_blank"
 * />
 */
declare const InfoPopover: FunctionComponent<InfoPopoverProps>;
export default InfoPopover;
