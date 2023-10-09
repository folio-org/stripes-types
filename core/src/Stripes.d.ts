import { Requireable } from 'react';

/** Type of the `stripes` object */
export interface StripesType {
  /**
   * Check if the current user has a given permission
   * @see https://github.com/folio-org/stripes/blob/master/doc/dev-guide.md#testing-for-permission
   */
  hasPerm(perm: string): boolean;

  // TODO: fill this in with additional properties from Stripes object
  // https://github.com/folio-org/stripes/blob/master/doc/dev-guide.md#the-stripes-object
  [key: string]: unknown;
}

export const stripesShape: Requireable<StripesType>;

export class Stripes implements StripesType {
  hasPerm(perm: string): boolean;
  [key: string]: unknown;
}
