import { AriaAttributes, Component, CSSProperties, ElementType, ReactNode, Ref } from 'react';
import { SetOptional } from 'type-fest';
import { PaneHeaderDefaultProps } from '../PaneHeader/PaneHeader';

export interface PaneProps extends AriaAttributes {
  /**
   * Activates the action menu dropdown; function must return a node/component
   * (probably a `<MenuSection>`)
   * For advanced usage, use {@link renderHeader} instead
   */
  actionMenu?: PaneHeaderDefaultProps['actionMenu'];
  /**
   * Adds an icon to the header.  Expects an `<AppIcon>` from `stripes-core`.
   * For advanced usage, use {@link renderHeader} instead
   */
  appIcon?: PaneHeaderDefaultProps['appIcon'];
  /**
   * Wraps the contents in a centered container -- useful in large panes where
   * you do not want the content to fill the pane's entire width
   */
  centerContent?: boolean;
  /** The pane's contents */
  children: ReactNode;
  /**
   * The percentage of the paneset that should be occupied,
   * or `fill` to use all available space
   */
  defaultWidth: `${number}%` | 'fill';
  /**
   * If a close (x) button should be rendered in the pane's header:
   * - A `false` value will not render a button
   * - A `true` value will render a button in the firstMenu (left side in ltr languages)
   * - A `"last"` value will render a button in the lastMenu (right side in ltr languages)
   * For advanced usage, use {@link renderHeader} instead
   */
  dismissible?: PaneHeaderDefaultProps['dismissible'];
  /**
   * Component (probably a `<PaneMenu>`) to render at the beginning of the header
   * (top left in ltr languages)
   * For advanced usage, use {@link renderHeader} instead
   */
  firstMenu?: PaneHeaderDefaultProps['firstMenu'];
  /** If true, removes the default min-width applied to the pane's contents */
  fluidContentWidth?: boolean;
  /** A node (likely a <PaneFooter>) to render at the bottom of the pane */
  footer?: ReactNode;
  /** The height of the pane, not to exceed `100vh` (used for the universal FOLIO header) */
  height?: CSSProperties['height'];
  /** Specify an ID to use for the Pane */
  id?: string;
  /**
   * Component (probably a `<PaneMenu>`) to render at the end of the header
   * (top right in ltr languages)
   * For advanced usage, use {@link renderHeader} instead
   */
  lastMenu?: PaneHeaderDefaultProps['lastMenu'];
  /**
   * If the pane is not expected to scroll.  If true, scrollbars will be
   * hidden, fixing some issues in result panes and the like.
   */
  noOverflow?: boolean;
  /**
   * Callback for when the pane is closed using its close button (see `dismissible` prop)
   * For advanced usage, use {@link renderHeader} instead
   */
  onClose?: () => void;
  /** Callback for when the pane is mounted */
  onMount?: (args: { paneRef: Ref<HTMLElement>; paneTitleRef: Ref<HTMLDivElement> }) => void;
  /** If the pane's contents should be padded */
  padContent?: boolean;
  /**
   * Add a subtitle to the pane, as a node or string (recommended).
   * For advanced usage, use {@link renderHeader} instead
   */
  paneSub?: PaneHeaderDefaultProps['paneSub'];
  /**
   * Add a title to the pane, as a node or string (recommended).
   * This will be enclosed with a `<h2>` for accessibility
   * For advanced usage, use {@link renderHeader} instead
   */
  paneTitle?: PaneHeaderDefaultProps['paneTitle'];
  /**
   * A reference to the header of the pane
   * For advanced usage, use {@link renderHeader} instead
   */
  paneTitleRef?: PaneHeaderDefaultProps['paneTitleRef'];
  /**
   * A function to render a `<PaneHeader>`.  This is the preferred method
   * over providing props to the `<Pane>` itself.  The parameters are props
   * that were passed to this pane but belong to the header, so should
   * probably be spread to your custom `<PaneHeader>` before your props.
   * This method will eventually be the only supported method.
   */
  renderHeader?: (
    renderProps: Pick<
      SetOptional<PaneHeaderDefaultProps, keyof PaneHeaderDefaultProps>,
      | 'paneTitle'
      | 'paneTitleRef'
      | 'paneSub'
      | 'appIcon'
      | 'firstMenu'
      | 'lastMenu'
      | 'actionMenu'
      | 'dismissible'
      | 'onClose'
      | 'id'
    >,
  ) => ReactNode;
  /** Render something immediately beneath the main pane header (likely a <PaneSubheader>) */
  subheader?: ReactNode;
  /** Use a custom element for the root element of the pane */
  tagName?: ElementType;
  /** Set the transition of the pane */
  transition?: 'none' | 'slide';
}

/**
 * A pane, central to FOLIO module layout.
 * @example
 * <Pane
 *   defaultWidth="20%"
 *   paneTitle="Filters"
 * >
 *   Pane Content
 * </Pane>
 * <Pane
 *   defaultWidth="fill"
 *   padContent={false} // prevent horizontal scrolling
 *   noOverflow         // at the pane level (useful in case the rendered content, like a results list, handles this.)
 *   // Render a custom header using the "renderHeader"-prop if needed
 *   renderHeader={renderProps => <PaneHeader {...renderProps} paneTitle="Search Results" />}
 * >
 *   Pane Content
 * </Pane>
 */
export default class Pane extends Component<PaneProps> {}
