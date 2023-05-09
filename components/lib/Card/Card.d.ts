import { AriaAttributes, FunctionComponent, ReactNode } from 'react';

export interface CardProps extends AriaAttributes {
  /** Add a custom class to the card's body */
  bodyClass?: string;
  /** Add a custom class to the card */
  cardClass?: string;
  /** Background color of the card */
  cardStyle?: 'default' | 'negative' | 'positive';
  /** The content of the card's body */
  children: ReactNode;
  /** Add a custom class to the card's header */
  headerClass?: string;
  /** The component that represents the card's header */
  headerComponent?: ReactNode | string;
  /** The component at the end of the card's header */
  headerEnd?: ReactNode | string;
  /** Props to be passed into the card's header components */
  headerProps?: object;
  /** The component at the start of the card's header */
  headerStart: ReactNode | string;
  /** Remove bottom margin */
  marginBottom0?: boolean;
  /** Apply a border-radius to the card for rounded borders */
  roundedBorder?: boolean;
}

/**
 * Renders a card with a header and body content. Different styles can
 * be applied using a combination of the cardStyle and roundedBorder
 * props. Classes can be applied using the various classname props.
 * @example
 * <Card
 *   cardStyle="negative"
 *   headerStart="Organization"
 *   headerEnd={<Button>Add organization</Button>}
 *   roundedBorder
 * >
 *  <Layout className="textCentered">No organization added</Layout>
 * </Card>
 */
declare const KeyValue: FunctionComponent<CardProps>;
export default KeyValue;
