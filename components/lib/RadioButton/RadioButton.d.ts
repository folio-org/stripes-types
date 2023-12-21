import {
  AriaAttributes,
  CSSProperties,
  ChangeEventHandler,
  FocusEventHandler,
  FunctionComponent,
  InputHTMLAttributes,
} from 'react';

export interface RadioButtonProps extends AriaAttributes, InputHTMLAttributes<HTMLInputElement> {
  /** If the field should automatically focus on mount */
  autoFocus?: boolean;
  /** If the radio button is centered */
  centered?: boolean;
  /** If the radio button is checked */
  checked?: boolean;
  /** Add a custom class name on the root element */
  className?: string;
  /** If the radio button is disabled */
  disabled?: boolean;
  /** Render error message below the radio button */
  error?: string;
  /** If the field should take up the full width of its container */
  fullWidth?: boolean;
  /** Add a custom ID to the control */
  id?: string;
  /** If the radio button should be rendered inline */
  inline?: boolean;
  /** The radio button's label */
  label?: string;
  /** Add a class to the label */
  labelClass?: string;
  /** Add style to the label */
  labelStyle?: CSSProperties;
  /** If the radio button should be rendered without a margin bottom */
  marginBottom0?: boolean;
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
  /** Render the warning message below the radio button  */
  warning?: string;

  // TODO: reference react-final-form FieldRenderProps<boolean | string[]>
  input?: any;
  meta?: any;
}

/**
 * Basic HTML radio button. If a value is provided, then `react-final-form`'s value
 * will be an array containing the value if and only if the radio button is checked.
 * This allows for advanced usage with many radio buttons.  Otherwise, the value
 * is simply a boolean indicating if the radio button is checked.
 * @example
 * <RadioButton
 *   checked={true}
 *   value="bananas"
 *   onChange={(event) => {
 *     // consume event.target.value
 *   }}
 * />
 * @example
 * <Field
 *   component={RadioButton}
 *   type="checkbox"
 *   name="bananas"
 *   label="Bananas are green?"
 * />
 */
declare const RadioButton: FunctionComponent<RadioButtonProps>;
export default RadioButton;
