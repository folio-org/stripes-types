import { ComponentType } from 'react';
import { SetOptional } from 'type-fest';
import { PaneHeaderIconButtonProps } from '../PaneHeaderIconButton/PaneHeaderIconButton';

// The icon is `arrow-left` by default
export type PaneBackLinkProps = SetOptional<PaneHeaderIconButtonProps, 'icon'>;

/**
 * Renders a left arrow used to close panes on smaller screens (hidden above `medium` breakpoint).
 * All props are passed to the internal `IconButton`.
 * @example
 * <Pane
 *   renderHeader={renderProps => (
 *     <PaneHeader
 *       {...renderProps}
 *       firstMenu={
 *         <PaneMenu>
 *           <PaneBackLink to="/my-module-root" />
 *         </PaneMenu>
 *       }
 *     />
 *   )}
 * >
 * ...
 * </Pane>
 */
export const PaneBackLink: ComponentType<PaneBackLinkProps>;
export default PaneBackLink;
