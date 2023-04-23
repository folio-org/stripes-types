import { FunctionComponent, ReactNode } from 'react';

export interface LabelProps {
  /** The content of the `<Label>` */
  children: ReactNode;
  /** Applies a custom class name */
  className?: string;
  /** Adds a `for` attribute on the label-element */
  htmlFor?: string;
  /** Adds an ID on the label-element */
  id?: string;
  /** Renders a lock-icon next to the label (indicating that the associated field is read-only) */
  readOnly?: boolean;
  /** Renders an asterisk next to the label (indicating that the associated field is required) */
  required?: boolean;
  /** Change the tag name of the component (`label` by default) */
  tagName?: string;
}

/**
 * Renders a simple <label> with a few optional additions
 *
 * Note: Most form components have already labels implemented directly, activated
 * by the `label`-prop. This component is only relevant in special circumstances
 * – e.g. when creating a new form component.
 *
 * @example
 * <Label required>
 *   My label
 * </Label>
 */
declare const Label: FunctionComponent<LabelProps>;
export default Label;
