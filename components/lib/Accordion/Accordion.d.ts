import { Component, ComponentType, CSSProperties, ReactNode, RefObject } from 'react';
import { HotKeysProps } from '../HotKeys';
import { DefaultAccordionHeaderProps } from './headers/DefaultAccordionHeader';

export type AccordionProps<HeaderProps = DefaultAccordionHeaderProps> = Partial<HeaderProps> & {
  /** The containing accordionSet */
  accordionSet?: ReactNode;
  /** The accordion's contents */
  children: ReactNode | ((open: boolean) => ReactNode);
  /** Add class(es) to the component */
  className?: string;
  /** If the accordion should be closed by default */
  closedByDefault?: boolean;
  /** Sets the height of the accordion */
  contentHeight?: CSSProperties['height'];
  /** The id of the content div */
  contentId?: string;
  /** A reference to the content div */
  contentRef?: RefObject<HTMLDivElement>;
  /** If the accordion should be disabled */
  disabled?: boolean;
  /** Supplies a custom header */
  header?: ReactNode | ComponentType<HeaderProps>;
  /** Adds props to the header (additional props on the root `<Accordion>` will also be passed) */
  headerProps?: Partial<HeaderProps>;
  /** The id of the accordion */
  id?: string;
  /** A label for the accordion */
  label: ReactNode;
  /** A callback for when the header is clicked to toggle open/closed */
  onClickToggle?: (args: { id: string; label: string; open: boolean }) => void;
  /** A callback for when the header is toggled (not just clicked, but external e.g. expand all) */
  onToggle?: (args: { id: string; label: string }) => void;
  /** If the accordion is currently open */
  open?: boolean;
  /** If the separator between header and contents should be drawn */
  separator?: boolean;
  toggleKeyHandlers?: HotKeysProps['handlers'];
  toggleKeyMap?: HotKeysProps['keyMap'];
};

/**
 * Displays information in an accordion
 * @example
 * <AccordionSet>
 *   <Accordion label="AccordionSet_one">
 *     <p>first content</p>
 *   </Accordion>
 *   <Accordion label="AccordionSet_two">
 *     <p>second content</p>
 *   </Accordion>
 * </AccordionSet>
 */
export default class Accordion<HeaderProps = DefaultAccordionHeaderProps> extends Component<
  AccordionProps<HeaderProps>
> {}
