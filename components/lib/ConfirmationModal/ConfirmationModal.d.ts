import { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { ButtonStyle } from '../Button';

export interface ConfirmationModalProps {
  /** The modal's H1 tag and ARIA-label */
  heading: string;
  /** The modal's message, rendered within a `<p>` tag (unless overrode in `bodyTag`) */
  message?: ReactNode;

  /** If the modal is open */
  open: boolean;
  /** Callback for when the Submit button is clicked */
  onConfirm: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  /** Callback for when the Cancel button is clicked */
  onCancel: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;

  /** If the confirm button should be disabled */
  isConfirmButtonDisabled?: boolean;

  /** Custom text for the Cancel action */
  cancelLabel?: ReactNode;
  /** Custom text for the Submit action */
  confirmLabel?: ReactNode;

  /** Style of the Submit action button */
  buttonStyle?: ButtonStyle;
  /** Style of the Cancel action button */
  cancelButtonStyle?: ButtonStyle;

  /** The tag to render the modal's body as */
  bodyTag?: string;
}

/**
 * Renders a basic confirmation modal with customizable cancel and submit buttons
 * @example
 * const [open, setOpen] = useState(false);
 *
 * const handleConfirm = useCallback(() => {
 *   setOpen(false);
 *   // do something
 * });
 *
 * const handleCancel = useCallback(() => {
 *   setOpen(false);
 * });
 *
 * <ConfirmationModal
 *   open={open}
 *   heading="Please confirm!"
 *   message="Description of the thing that needs confirming"
 *   onConfirm={handleConfirm}
 *   onCancel={handleCancel}
 * />
 */
export const ConfirmationModal: FunctionComponent<ConfirmationModalProps>;
export default ConfirmationModal;
