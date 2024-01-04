import { Moment } from 'moment';
import { AriaAttributes, Component, FocusEventHandler, ReactNode, Ref } from 'react';
import { Merge } from 'type-fest';
import { PopperModifiers, PopperPlacement } from '../Popper';
import { TextFieldProps } from '../TextField';

export interface DatepickerProps extends AriaAttributes {
  /** If the field should auto-focus on mount */
  autoFocus?: boolean;
  /** How backend dates should be parsed, e.g. `"ISO 8601"` */
  backendDateStandard?: string;
  /** How the date should be formatted/localized, e.g. `YYYY.MM.DD` */
  dateFormat?: string;
  /** Disables the input field */
  disabled?: boolean;
  /** Disallows selection of dates that the function returns true */
  exclude?: (moment: Moment) => boolean;
  /** If the picker should close once a date is clicked */
  hideOnChoose?: boolean;
  /** Adds a custom ID to the control */
  id?: string;
  /** Ref to the internal text field */
  inputRef?: Ref<HTMLInputElement>;
  /** Label the datepicker */
  label?: ReactNode;
  /** Set the locale for use */
  locale?: string;
  /** Remove bottom margin */
  marginBottom0?: boolean;
  /** Popper modifiers */
  modifiers?: PopperModifiers;
  /** Fired when the user clicks out of/deselects the control */
  onBlur?: FocusEventHandler<HTMLInputElement>;
  /** Fired anytime internal state changes */
  onChange?: (e: Event, formatted: string, dateString: string) => void;
  /** Fired when the user clicks into the control */
  onFocus?: FocusEventHandler<HTMLInputElement>;
  /** When a date is chosen on the calendar */
  onSetDate?: (date: Moment) => void;
  /** Parses a date for local display in the text field */
  parser?: (value: string) => string;
  /** Where the overlay should be placed in relation to the field */
  placement?: PopperPlacement;
  /** If the control is readonly */
  readOnly?: boolean;
  /** If the field is required */
  required?: boolean;
  /** Additional message to be read when the field is focused */
  screenReaderMessage?: boolean;
  /** If the calendar should start off opened */
  showCalendar?: boolean;
  /** Override the default timezone */
  timeZone?: string;
  /** If focusing the text field should open the calendar popup */
  useFocus?: boolean;
  /** If the field is being used within a final-form or similar */
  useInput?: boolean;
  /** Render to the global overlay, if the dropdown may be cut off due to some containing elements's overflow */
  usePortal?: boolean;
  /** The field's value */
  value?: string;

  /** Determines if the datepicker's value will be the formatted local string or one ready for the backend */
  outputBackendValue?: boolean;
  /** Formats a date for the backend */
  outputFormatter?: (date: Moment) => string;

  // TODO: reference react-final-form FieldRenderProps<string>
  input?: any;
  meta?: any;
}

/**
 * A picker for dates with an optional calendar popup.
 *
 * @example
 * <Datepicker />
 * @example
 * // or pass as component within a form...
 * <Field component={Datepicker} />
 * @example
 * <Datepicker
 *   label="Date"
 *   value={this.state.day1}
 *   onChange={handleDateChange}
 * />
 */
export default class Datepicker extends Component<
  Merge<Partial<TextFieldProps>, DatepickerProps>
> {}
