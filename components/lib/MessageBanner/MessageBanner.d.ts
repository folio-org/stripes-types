import { AriaAttributes, ComponentProps, ElementType, ReactNode, Ref } from 'react';
import { IconName } from '../Icon/Icon';
import { IconButtonProps } from '../IconButton';

// cspell:ignore dismissable

export type MessageBannerProps<Element extends ElementType = 'div'> =
  // extends props of whatever Element is provided
  (Element extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[Element]
    : ComponentProps<Element>) & {
    /** Sets the aria-live of the root element */
    'aria-live'?: AriaAttributes['aria-live'];
    /** Sets the style of the banner */
    type?: 'default' | 'success' | 'error' | 'warning';
    /** Banner contents */
    children?: ReactNode;
    /** Render an icon next to the message. `null` will  */
    icon?: IconName | null;

    /** @deprecated use dismissible instead */
    dismissable?: true;
    /** If true, adds a close icon and makes the banner dismissible */
    dismissible?: true;
    /** Requires `dismissible=true`. If the dismiss button should be auto-focused upon entering the DOM */
    autoFocusDismissButton?: boolean;
    /** Requires `dismissible=true`. Adds an aria-label to the dismiss icon */
    dismissButtonAriaLabel?: string;
    /** Requires `dismissible=true`. Passes additional props to the dismiss <IconButton> */
    dismissButtonProps?: Partial<IconButtonProps>;

    /** Callback when the banner enters */
    onEnter?: () => void;
    /** Callback when the banner has entered */
    onEntered?: () => void;
    /** Callback when the banner exits */
    onExit?: () => void;
    /** Callback when the banner has exited */
    onExited?: () => void;

    /** Adds a custom class name for the banner */
    className?: string;
    /** Adds a custom class name for the content element inside the banner */
    contentClassName?: string;

    /** Change the root element of the banner */
    element: Element;

    /** Control the visibility externally; using this will enable transitioning */
    show?: boolean;

    ref?: Ref<Element>;
  };

/**
 * Display a message to the user. The message banner has short and clear content with key information in bold.
 * @example
 * ```js
 * <MessageBanner>Default</MessageBanner>
 * <MessageBanner type="success">Success</MessageBanner>
 * <MessageBanner type="error">Error</MessageBanner>
 * <MessageBanner type="warning">Warning</MessageBanner>
 *
 * <MessageBanner type="error">
 *   <ul>
 *     <li><strong>Using an unordered HTML list</strong></li>
 *     <li>Your password must include one numeric value</li>
 *     <li>Your password must include one special character</li>
 *     <li>Your password must be at least 8 characters</li>
 *   </ul>
 * </MessageBanner>
 * ```
 *
 * @example dismissible
 * <MessageBanner dismissible>
 *   I'm dismissible
 * </MessageBanner>
 *
 * @example
 * ```js
 * const [show, setShow] = useState(false);
 *
 * <Button onClick={() => setShow(!show)}>Toggle</Button>
 * <MessageBanner
 *   show={show}
 *
 *   // Optional
 *   onEnter={() => console.log('Enter')}
 *   onEntered={() => console.log('Entered')}
 *   onExit={() => console.log('Exit')}
 *   onExited={() => console.log('Exited')}
 * >
 *   Hello World
 * </MessageBanner>
 * ```
 */
export default function MessageBanner<Element extends ElementType = 'div'>(
  props: MessageBannerProps<Element>,
): ReactNode;
