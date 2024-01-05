import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';

export type HeadlineSize = 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
export type HeadlineWeight = 'regular' | 'medium' | 'bold' | 'black';

export interface HeadlineProps {
  /** If the headline should have display: block */
  block?: boolean;
  /**
   * Makes the headline bold
   * @deprecated use the weight prop instead
   */
  bold?: boolean;
  /** Sets the label of the headline */
  children: ReactNode;
  /** Adds additional classes to the element */
  className?: string;
  /** Adds a faded style (gray color) */
  faded?: boolean;
  /** If the headline should have display: flex */
  flex?: boolean;
  /** Controls the bottom margin of the headline, corresponds to the size prop */
  margin?:
    | 'xx-small'
    | 'x-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | 'xx-large'
    | 'none'
    | '';
  /** The size of the headline */
  size?: HeadlineSize;
  /** The tag to render the headline as */
  // redundant, but provides nice auto-complete for listed tags
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'legend' | string;
  /** Control the font-weight of the headline */
  weight?: HeadlineWeight;
}

/**
 * Renders headlines in different sizes and with different tags, margins and styles depending on props.
 * @example <Headline size="x-large">foo</Headline>
 */
declare const Headline: ForwardRefExoticComponent<
  PropsWithoutRef<HeadlineProps> & RefAttributes<HTMLElement>
>;
export default Headline;
