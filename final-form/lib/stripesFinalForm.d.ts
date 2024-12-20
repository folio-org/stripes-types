import { ComponentType } from 'react';
import { FormProps, FormRenderProps } from 'react-final-form';

/**
 * these are put on the wrapper component rather than passed within `opts`
 */
type extractedProps = 'onSubmit' | 'initialValues';

/**
 * A `react-final-form` wrapper for Stripes.
 *
 * @param opts Options to be passed to `react-final-form`'s {@link FormProps}, such as `validate` or `validateOnBlur`
 * @param Component the component to be wrapped; this will be passed the {@link FormRenderProps} such as `handleSubmit` and any other props passed to the wrapper component
 * @param ComponentProps extra props which should be forwarded from the wrapper to the underlying form component
 * @param FormValues the type of the form's values
 *
 * @example
 * stripesFinalForm({
 *   // options for react-final-form
 * })(FormComponent)
 */
export default function stripesFinalForm<
  ComponentProps = Record<string, unknown>,
  FormValues = Record<string, unknown>
>(
  opts: Omit<FormProps<FormValues>, extractedProps> & {
    navigationCheck?: boolean;
  }
): (
  Component: ComponentType<FormRenderProps<FormValues> & ComponentProps>
) => ComponentType<ComponentProps & Pick<FormProps<FormValues>, extractedProps>>;

export type { FormProps, FormRenderProps } from 'react-final-form';
