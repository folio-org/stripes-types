import {
  AriaAttributes,
  ChangeEventHandler,
  Component,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
  Ref,
} from 'react';

export interface TextAreaProps extends AriaAttributes, InputHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Provides a custom label for the element
   * @deprecated use `aria-label` instead
   */
  ariaLabel?: AriaAttributes['aria-label'];
  /**
   * Identify the element which labels the current element
   * @deprecated use `aria-labelledby` instead
   */
  ariaLabelledby?: AriaAttributes['aria-labelledby'];
  /** If the field should auto-focus on mount */
  autoFocus?: boolean;
  /** Marks the field as changed, for styling */
  dirty?: boolean;
  /** Disables the input field */
  disabled?: boolean;
  /** Control or Icon to display at the end of the field */
  endControl?: ReactNode;
  /** An error to show for validation */
  error?: ReactNode;
  /** Resizes the textarea to show all content as needed */
  fitContent?: boolean;
  /** If the field should stretch to fill its container */
  fullWidth?: boolean;
  /** Adds a custom ID to the control */
  id?: string;
  /** Ref to the internal HTMLTextArea */
  inputRef?: Ref<HTMLTextAreaElement>;
  /** The input's label */
  label?: ReactNode;
  /** Adds a loading spinner to the control */
  loading?: boolean;
  /** Prevent the user from changing the width */
  lockWidth?: boolean;
  /** Remove bottom margin */
  marginBottom0?: boolean;
  /** The input's name */
  name?: string;
  /**
   * When true: Shift+Enter=newline, Enter=submit
   * When false: whatever the default behavior is
   */
  newLineOnShiftEnter?: boolean;
  /** Removes the border */
  noBorder?: boolean;
  /** Fired anytime internal state changes */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  /** Fired on key down */
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  /** Event handler for submission, fired when `newLineOnShiftEnter=true` and user presses Enter */
  onSubmitSearch?: KeyboardEventHandler<HTMLTextAreaElement>;
  /** Fired when the user clicks into the control */
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  /** If the control is readonly */
  readOnly?: boolean;
  /** If the field is required */
  required?: boolean;
  /** Adds a custom class to the root wrapper `<div> */
  rootClass?: string;
  /** Control or Icon to display at the start of the field */
  startControl?: ReactNode;
  /** If true, adds valid styles to the field */
  valid?: boolean;
  /** If validation styles should be rendered */
  validationEnabled?: boolean;
  /** If styles should be shown for valid input */
  validStylesEnabled?: boolean;
  /** The field's value */
  value?: string;
  /** Inline feedback for the user indicating a validation warning */
  warning?: ReactNode;

  // TODO: reference react-final-form FieldRenderProps<string|number>
  input?: any;
  meta?: any;
}

/**
 * A multi-line, resizable text field
 *
 * @example
 * <Field name="username" component={TextArea} />
 * @example
 * <Field name="amount" component={TextArea<number>} />
 * @example
 * <TextArea<string>
 *   label="Username"
 *   value={this.state.username}
 *   onChange={this.handleChange}
 * />
 */
export default class TextArea extends Component<TextAreaProps> {}
