import { FunctionComponent, ReactNode } from 'react';

export interface IfPermissionProps {
  /** What should be conditionally rendered */
  children: ReactNode | (({ hasPermission }: { hasPermission: boolean }) => ReactNode);
  /** The permission to check for */
  perm: string;
}

/**
 * Conditionally renders based on the existence of a permission.
 * Supports ReactNodes as children or a render function-prop function.
 *
 * If a render function is provided, it will be called with a object
 * `{ hasPermission: boolean }` as its parameter.
 *
 * @example
 * <IfPermission perm="users.edit">
 *   <button onClick={this.onClickEditUser}>Edit</button>
 * </IfPermission>
 *
 * @example
 * <IfPermission perm="users.edit">
 *   {({ hasPermission }) => hasPermission ?
 *     <button onClick={this.onClickEditUser}>Edit</button>
 *     :
 *     <span>You do not have permission to edit this user!</span>
 *   }
 * </IfPermission>
 */
declare const IfPermission: FunctionComponent<IfPermissionProps>;
export default IfPermission;
