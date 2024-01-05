import {
  AriaAttributes,
  ComponentProps,
  ElementType,
  FunctionComponent,
  HTMLProps,
  ReactNode,
  Ref,
} from 'react';
import { RadioButtonProps } from '../RadioButton/RadioButton';

export interface RadioButtonGroupProps
  extends Omit<HTMLProps<HTMLFieldSetElement>, 'onBlur' | 'onFocus' | 'onChange' | 'label'> {
  /** Set of `<RadioButton>`s for usage. Can contain additional elements but `<RadioButton>`s must be at the top level. */
  children: ReactNode;
  /** Error text to display */
  error?: ReactNode;
  /** Label for the created `<fieldset>`'s `<legend>` */
  label?: ReactNode;
  /** Callback for when the field is blurred */
  onBlur?: RadioButtonProps['onBlur'];
  /** Callback for when the field is focused */
  onFocus?: RadioButtonProps['onFocus'];
  /** Callback for when the field's value changes */
  onChange?: RadioButtonProps['onChange'];
  /** Default value for the button (use `<Field>`'s `initialValues` when using in react-final-form or redux-form) */
  value?: string;
  /** Warning text to display */
  warning?: ReactNode;
}

/**
 * Convenient wrapper component for sets of radio buttons. Will pass `name` prop as well as other shared props down to `<RadioButton>` children.
 * The component will automatically render radio buttons within a `<FieldGroup>` with the value for the `label` prop applied as a `<legend>`. Non-`<RadioButton>` children can also be passed for alternative layouts, but **RadioButtons should still be direct descendants**.
 *
 * @example Basic usage
 * ```js
 *   <RadioButtonGroup label="Acting as" name="subGroup">
 *     <RadioButton label="self" id="actingAsSelf" value="self" />
 *     <h4>Sponsor</h4>
 *     <RadioButton label="Abbot, Cody" id="actingSponsor001" value="sponsor001" inline />
 *     <RadioButton label="Doe, John" id="actingSponsor002" value="sponsor002" inline />
 *     <RadioButton label="Martin, Danforth" id="actingSponsor003" value="sponsor003" inline />
 *     <RadioButton label="James, Phillip" id="actingSponsor004" value="sponsor004" inline />
 *   </RadioButtonGroup>
 * ```
 * @example react-final-form usage via render-prop
 * ```js
 *   <Field name="subGroup" render={(props) =>
 *     <RadioButtonGroup {...props} label="Acting as">
 *       <RadioButton label="self" id="actingAsSelf" value="self" />
 *       <h4>Sponsor</h4>
 *       <RadioButton label="Abbot, Cody" id="actingSponsor001" value="sponsor001" inline />
 *       <RadioButton label="Doe, John" id="actingSponsor002" value="sponsor002" inline />
 *       <RadioButton label="Martin, Danforth" id="actingSponsor003" value="sponsor003" inline />
 *       <RadioButton label="James, Phillip" id="actingSponsor004" value="sponsor004" inline />
 *     </RadioButtonGroup>
 *   } />
 * ```
 */
declare const RadioButtonGroup: FunctionComponent<RadioButtonGroupProps>;
export default RadioButtonGroup;
