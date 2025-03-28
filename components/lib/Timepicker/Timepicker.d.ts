import { AriaAttributes, ComponentType, ReactNode, Ref } from 'react';
import { IntlShape } from 'react-intl';
import { PopperModifiers, PopperPlacement } from '../Popper';
import { TextFieldProps } from '../TextField';

export interface TimepickerProps
  extends AriaAttributes,
    Omit<TextFieldProps<string>, 'inputRef' | 'onChange'> {
  /** If the field should auto-focus on mount */
  autoFocus?: boolean;
  /** Disables the input field */
  disabled?: boolean;
  /** Adds a custom ID to the control */
  id?: string;
  /** Ref to the internal text field */
  inputRef?: Ref<HTMLInputElement>;
  /** Label the Timepicker */
  label?: ReactNode;
  /** Set the locale for use */
  locale?: string;
  /** Remove bottom margin */
  marginBottom0?: boolean;
  /** Popper modifiers */
  modifiers?: PopperModifiers;
  /** Fired anytime internal state changes */
  onChange?: (e: Event, standardizedTime: string, inputValue: string) => void;
  /** If the user-visible (formatted) output should be passed on change events, or the standard HH:MM:00Z */
  outputBackendValue?: boolean;
  /** Format a UTC value into the specified timezone */
  outputFormatter?: (props: {
    value: string | undefined;
    formats: string[];
    timezone: string;
    intl: IntlShape;
  }) => string;
  /** Parse a provided value into a given format */
  parser?: (
    value: string | undefined,
    timezone: string,
    timeFormat: string,
    intl: IntlShape,
  ) => string;
  /** Where the overlay should be placed in relation to the field */
  placement?: PopperPlacement;
  /** If the control is readonly */
  readOnly?: boolean;
  /** If the field is required */
  required?: boolean;
  /** Additional message to be read when the field is focused */
  screenReaderMessage?: boolean;
  /** If the picker should start off opened */
  showTimepicker?: boolean;
  /** Override the default timezone */
  timeZone?: string;
  /** Outputs values to onChange as seen directly in the input box */
  useInput?: boolean;
  /** Render to the global overlay, if the dropdown may be cut off due to some containing elements's overflow */
  usePortal?: boolean;
  /** The field's value */
  value?: string;

  // TODO: reference react-final-form FieldRenderProps<string>
  input?: any;
  meta?: any;
}

/**
 * A picker for times with an optional picker popup
 * @example
 * <Timepicker />
 * // or pass as component within a form...
 * <Field component={Timepicker} />
 * @example
 * <Field
 *   name="exampleTimeReturned"
 *   label="Time returned"
 *   id="timeReturnTP"
 *   placeholder="Select Time"
 *   component={Timepicker}
 * />
 */
declare const Timepicker: ComponentType<TimepickerProps>;
export default Timepicker;
