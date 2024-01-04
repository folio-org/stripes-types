import PopperJs from 'popper.js';
import { Component, ReactNode, ReactPortal, Ref } from 'react';

export type PopperPlacement = PopperJs.Placement;
export type PopperModifiers = PopperJs.Modifiers;

export const AVAILABLE_PLACEMENTS: PopperPlacement[];

export interface PopperProps {
  /** Reference to anchor element */
  anchorRef: Ref<HTMLElement>;
  /** The content of the Popper */
  children: ReactNode;
  /** Hide the overlay if the popper is closed, rather than removing the overlay from the DOM */
  hideIfClosed?: boolean;
  /** If the popper is open */
  isOpen: boolean;
  /** Modifiers */
  modifiers?: PopperModifiers;
  /** Callback when anything is changed in the Popper.js instance */
  onUpdate?: (data: PopperJs.Data) => void;
  /** Adds props to the overlay `<div>` */
  overlayProps?: Partial<JSX.IntrinsicElements['div']>;
  /** Grabs a reference to the overlay `<div>` */
  overlayRef?: Ref<HTMLDivElement>;
  /** The popper's placement */
  placement?: PopperPlacement;
  /** Renders the overlay inside a custom portal */
  portal?: ReactPortal;
}

/**
 * Popper relies on the 3rd party library (Popper.js) for perfect positioning. Is a
 * component with basic mechanism for another components with popups.
 *
 * @example
 * <Popper
 *   isOpen={isOpen}
 *   anchorRef={anchorRef}
 * >
 *   <div>Overlay</div>
 * </Popper>
 */
export default class Popper extends Component<PopperProps> {}
