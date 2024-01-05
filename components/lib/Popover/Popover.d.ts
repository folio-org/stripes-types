import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes, Ref } from 'react';
import { PopperModifiers, PopperPlacement, PopperProps } from '../Popper';

export interface PopoverRenderTriggerProps {
  ref: Ref<HTMLElement>;
  open: boolean;
  toggle: () => void;
}

export type PopoverProps = {
  /**
   * Pass a ref to an alternative anchor element (where the popover attaches).
   * This replaces the auto-generated one passed to the `renderTrigger` function.
   */
  anchorRef?: Ref<HTMLElement>;
  /** The content of the popover. The function version will accept the same render-props as `renderTrigger` */
  children: ReactNode | ((props: PopoverRenderTriggerProps) => ReactNode);
  /** A custom class name for the overlay */
  className?: string;
  /** Modifiers for the internal Popper */
  modifiers?: PopperModifiers;
  /** Removes the default padding */
  noPadding?: boolean;
  /** Sets the offset (px) from the overlay to the anchor/trigger */
  offset?: number;
  /** Determines the placement of the popover relative to the trigger */
  placement?: PopperPlacement;
  /** Pass additional props to the internal Popper component */
  popperProps?: PopperProps;
  /** Renders the trigger button/anchor element */
  renderTrigger?: (props: PopoverRenderTriggerProps) => ReactNode;
} & (
  | {
      // controlled

      /** if the popover is open (controlled only) */
      open: boolean;
      /** callback for updating the popover's state (controlled only) */
      onToggle: (open: boolean) => void;
    }
  | {
      // uncontrolled

      /** if the popover is open, must include `onToggle` as well */
      open?: never;
      /** callback for updating the popover's state, must include `open` as well */
      onToggle?: never;
    }
);

/**
 * Component to render a small pop-up "tip" once a trigger element is clicked. Clicking
 * the target again should toggle the popover. Clicking outside of the popover will typically close it.
 *
 * @example
 * Uncontrolled:
 *
 * ```js
 * <Popover
 *   renderTrigger={({ open, ref, toggle, }) => (
 *     <Button
 *       onClick={toggle}
 *       ref={ref}
 *     >
 *       {open ? 'Close' : 'Open'}
 *     </Button>
 *   )}
 * >
 *   Lorem ipsum delor sit amet...
 * </Popover>
 * ```
 *
 * @example
 * Controlled:
 *
 * ```js
 * const [open, setOpen] = useState(false);
 *
 * <Popover
 *   open={open}
 *   onToggle={() => setOpen(!open)}
 *   renderTrigger={({ open, ref, toggle, }) => (
 *     <Button
 *       onClick={toggle}
 *       ref={ref}
 *     >
 *       {open ? 'Close' : 'Open'}
 *     </Button>
 *   )}
 * >
 *   Lorem ipsum delor sit amet...
 * </Popover>
 * ```
 */
declare const Popover: ForwardRefExoticComponent<
  PropsWithoutRef<PopoverProps> & RefAttributes<HTMLDivElement>
>;
export default Popover;
