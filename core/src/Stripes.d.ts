import { Requireable } from 'react';

/** Type of the `stripes` object */
export interface StripesType {
  /**
   * Check if the current user has a given permission
   *
   * @returns undefined, if the user is not logged in or similar error
   * @returns true, if the user has the permission
   * @returns false, if the user does not have the permission
   * @see https://github.com/folio-org/stripes/blob/master/doc/dev-guide.md#testing-for-permission
   */
  hasPerm(perm: string): boolean | undefined;

  /**
   * Check if an interface is available
   *
   * @returns undefined, on error
   * @returns false, if the interface is not present
   * @returns true, if the interface is available and no specific version was requested
   * @returns the version string, if the interface and requested version is available
   * @returns 0, if the interface is available but the requested version is not
   * @see https://github.com/folio-org/stripes/blob/master/doc/dev-guide.md#testing-for-interfaces
   */
  hasInterface(
    interface: string,
    version?: string,
  ): boolean | string | undefined;

  // TODO: fill this in with additional properties from Stripes object
  // https://github.com/folio-org/stripes/blob/master/doc/dev-guide.md#the-stripes-object
  [key: string]: unknown;
}

export const stripesShape: Requireable<StripesType>;

export class Stripes implements StripesType {
  hasPerm(perm: string): boolean | undefined;
  hasInterface(
    interface: string,
    version?: string,
  ): boolean | string | undefined;

  [key: string]: unknown;
}
