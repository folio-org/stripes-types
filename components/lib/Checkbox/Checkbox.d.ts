import {
  AriaAttributes,
  ChangeEventHandler,
  FocusEventHandler,
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
  Ref,
} from 'react';

export interface CheckboxProps extends AriaAttributes, InputHTMLAttributes<HTMLInputElement> {
  /** If the field should automatically focus on mount */
  autoFocus?: boolean;
  /** If the checkbox is checked */
  checked?: boolean;
  /** Custom class name on the root element */
  classNames?: string;
  /** Render labelInfo text in the checkbox label */
  labelInfo?: ReactNode;
  /** Add class name on the labelInfo element */
  labelInfoClass?: string;
  /** If the checkbox is disabled */
  disabled?: boolean;
  /** Render error message below the checkbox */
  error?: string | ReactNode;
  /** If the field should take up the full width of its container */
  fullWidth?: boolean;
  /** Add a custom ID to the control */
  id?: string;
  /** If the checkbox should be rendered inline */
  inline?: boolean;
  /** Add a class to the inner input  */
  innerClass?: string;
  /** Reference to the inner input */
  inputRef?: Ref<HTMLInputElement>;
  /** The checkbox's label */
  label?: ReactNode;
  /** Add a class to the label */
  labelClass?: string;
  /** Set a name for the input */
  name?: string;
  /** Function that triggers when user clicks out of/deselects the control */
  onBlur?: FocusEventHandler<HTMLInputElement>;
  /** Function that triggers when the state changes */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Function that triggers when user clicks on/selects the control */
  onFocus?: FocusEventHandler<HTMLInputElement>;
  /** If the control is readonly */
  readOnly?: boolean;
  /** If the field is required */
  required?: boolean;
  /** The selected value for the input, sent as part of HTML submit event */
  value?: string;
  /** Render the label above the checkbox  */
  vertical?: boolean;
  /** Render warning message below the checkbox */
  warning?: string | ReactNode;

  // TODO: reference react-final-form FieldRenderProps<boolean | string[]>
  input?: any;
  meta?: any;
}

/**
 * Basic HTML checkbox.  If a value is provided, then `react-final-form`'s value
 * will be an array containing the value if and only if the checkbox is checked.
 * This allows for advanced usage with many checkboxes.  Otherwise, the value
 * is simply a boolean indicating if the box is checked
 * @example
 * <Checkbox
 *   label="My Checkbox"
 *   checked={true}
 *   value="bananas"
 *   onChange={(event) => {
 *     // consume event.target.value
 *   }}
 * />
 * @example
 * <Field
 *   component={Checkbox}
 *   type="checkbox"
 *   name="bananas"
 *   label="Bananas are green?"
 * />
 */
declare const Checkbox: FunctionComponent<CheckboxProps>;
export default Checkbox;
