import { FunctionComponent, ReactNode } from 'react';

export interface IfInterfaceProps {
  /** What should be conditionally rendered */
  children: ReactNode;
  /** The interface to check for */
  name: string;
  /** The (optional) version to check for (major.minor) */
  version?: `${number}.${number}`;
}

/**
 * Conditionally renders based on the presence of an interface. If the version prop is also
 * provided, then the interface is required to be available in a version that is compatible
 * with the specified version (the same major version, and the same or higher minor version).
 *
 * @example
 * <IfInterface name="loan-storage" version="1.0">
 *   <ViewUserLoans />
 * </IfInterface>
 */
declare const IfInterface: FunctionComponent<IfInterfaceProps>;
export default IfInterface;
