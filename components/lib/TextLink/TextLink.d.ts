import { Component, ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

// <Link> has a <a> inside, so we can default safely to that
export type TextLinkProps<Element extends ElementType<{ className: string }> = 'a'> =
  ComponentPropsWithRef<Element> & {
    /** The content to display. Function form passes the root className in */
    children: ReactNode | ((props: { className: string }) => ReactNode);
    /** The root element we're using */
    element?: Element;
    /** Adds an additional class name to the component */
    className?: string;
  } & (Element extends 'a'
      ? // only include these if we're using the basic 'a'
        | { href: string; to?: never } // for basic <a>
          | (LinkProps & { to: string; href?: never }) // for <Link> from react-router-dom
      : // we use this as a psuedo-value for the "else"; it won't change the underlying intersection
        NonNullable<unknown>);

/**
 * A replacement for the native <a> and the react-router-dom `<Link>` component with a11y friendly interaction styles.
 *
 * The root element used is either `<a>` or `<Link>`, however, it can be customized via `element`.
 *
 * @example
 * ```js
 * <TextLink to="/users">
 *   I am an internal link
 * </TextLink>
 * ```
 * @example
 * ```js
 * <TextLink target="_blank" rel="noopener noreferrer" href="https://folio.org">
 *   I am an external link
 * </TextLink>
 * ```
 * @example
 * ```js
 * <TextLink element="button" onClick={() => doSomething()}>
 *   I am a button element!
 * </TextLink>
 * ```
 */
export default class TextLink<Element extends ElementType<{ className: string }>> extends Component<
  TextLinkProps<Element>
> {}
