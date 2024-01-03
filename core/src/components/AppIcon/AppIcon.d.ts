import { CSSProperties, FunctionComponent, ReactNode } from 'react';

export interface AppIconProps {
  /** The `alt` attribute for the `img` tag */
  alt?: string;
  /**
   * The lowercase full package name (e.g. `@folio/users`). Using this prop
   * will load the icon from the Stripes context
   */
  app?: string;
  /** Adds content next to the icon (for labels) */
  children?: ReactNode;
  /** Adds a custom class */
  className?: string;
  /** Loads icon based on an object; see `src` and `alt` */
  icon?: {
    src: string;
    alt?: string;
  };
  /** Vertical alignment of the icon */
  iconAlignment?: 'center' | 'baseline';
  /**
   * If aria-hidden should be applied. This is true by default since most
   * `<AppIcon>`s are rendered in/near a labelled element, we usually don't
   * want screen readers to read the `img`'s `alt`
   */
  iconAriaHidden?: boolean;
  /** Custom class on the inner icon element */
  iconClassName?: string;
  /** A specific icon key for apps with multiple icons (defaults to `app`) */
  iconKey?: string;
  /** The size of the icon */
  size?: 'small' | 'medium' | 'large';
  /** The `src` attribute for the `img` tag */
  src?: string;
  /** Custom `style` for the component */
  style?: CSSProperties;
  /** Use a custom tag for the root element */
  tag?: string;
}

/**
 * Displays an app's icon in various sizes.
 *
 * **There are multiple methods for loading icons:**
 *
 * 1. Use context (recommended)
 *   ```js
 *     import { AppIcon } from '@folio/stripes/core';
 *
 *     // Note: Make sure that the AppIcon has "stripes" in context as it relies on stripes.metadata.
 *     <AppIcon app="@folio/users" size="small" />
 *   ```
 *
 *   Optional: You can supply an iconKey if you need a specific icon within an app. If the specific icon isn't bundled with the app it will simply render a placeholder.
 *   ```js
 *     <AppIcon app="@folio/inventory" iconKey="holdings" />
 *   ```
 *
 * 2. Supply an object to the icon prop
 *   ```js
 *     const icon = {
 *       src: '/static/some-icon.png',
 *       alt: 'My icon',
 *     };
 *
 *     <AppIcon icon={icon} />
 *   ```
 *
 * 3. Pass src and alt as props
 *   ```js
 *     <AppIcon
 *       src="/static/some-icon.png"
 *       alt="My Icon"
 *     />
 *   ```
 *
 * Also, you can add a label to the icon by passing it as a child:
 *   ```js
 *    <AppIcon>
 *      Users
 *    </AppIcon>
 *   ```
 */
declare const AppIcon: FunctionComponent<AppIconProps>;
export default AppIcon;
