export interface UseNamespaceOpts {
  ignoreParents?: boolean;
  key?: string;
}

/**
 * A hook which returns module namespace as a string
 * https://issues.folio.org/browse/STCOR-537
 *
 * @example const [namespace, getNamespace] = useNamespace();
 *
 * @example // from app module (e.g. ui-users)
 * const [namespace] = useNamespace(); // "@folio/users"
 *
 * @example // from app module (e.g. ui-users) via getNamespace
 * const [_, getNamespace] = useNamespace();
 * const namespace = getNamespace({ key: 'test-key' }) // "@folio/users:test-key"
 *
 * @example // from plugin embedded in app module (e.g. ui-plugin-find-order executing in ui-agreements)
 * const [namespace] = useNamespace(); // "@folio/agreements:@folio/plugin-find-order"
 *
 * @example // from plugin embedded in app module with `ignoreParents` option (e.g. plugin ui-plugin-find-order executing in ui-agreements)
 * const [namespace] = useNamespace({ ignoreParents: true }); // "@folio/plugin-find-order"
 *
 * @example // from plugin embedded in app module with `key` option present (e.g. ui-plugin-find-order executing in ui-agreements)
 * const [namespace] = useNamespace({ key: "filters-pane" }); // "@folio/agreements:@folio/plugin-find-order:filters-pane"
 */
declare function useNamespace(
  options?: UseNamespaceOpts,
): [string, (opts: UseNamespaceOpts) => string];

export default useNamespace;
