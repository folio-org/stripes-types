import { Component, ReactNode } from 'react';

// these are the only parts of the record that are used by the component
// additionally, it safely checks for undefined values, so we assume
// any of them, even `personal` itself, can be undefined.
export interface UserLike {
  id?: string;
  personal?: {
    lastName?: string;
    firstName?: string;
    middleName?: string;
  };
}

export interface MetaSectionProps {
  /** HTML id attribute assigned to accordion's content */
  contentId?: string;
  /** Name/record of the user who created the record. */
  createdBy?: ReactNode | UserLike;
  /** Date/time a record was created. */
  createdDate?: string;
  /** Sets the heading level of the heading inside the accordion header. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Allows for the concealment of the createdBy and updatedBy information on the display */
  hideSource?: boolean;
  /** HTML id attribute assigned to accordion's root. */
  id?: string;
  /** If it should display inline (`display: flex`) */
  inlineLayout?: boolean;
  /** Name/record of the last user who modified the record. */
  lastUpdatedBy?: ReactNode | UserLike;
  /** Latest date/time a record was modified. */
  lastUpdatedDate?: string;
  /** If the background color should be disabled */
  noBackGround?: boolean;
  /** Should the user name link to the user record? Pass in permissions */
  showUserLink?: boolean;
  /** If the component should render within an `<Accordion>` */
  useAccordion?: boolean;
}

/**
 * Component for displaying record metadata such as the last date/time a record was modified.
 * @example
 * <MetaSection
 *   contentId='userInfoRecordMetaContent'
 *   createdDate={user.createdDate}
 *   headingLevel={4} // Optional
 *   id='userInfoRecordMeta'
 *   lastUpdatedDate={user.updatedDate}
 * />
 */
export default class MetaSection extends Component<MetaSectionProps> {}
