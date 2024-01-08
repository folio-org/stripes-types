export type NsParamsType = string | Record<string, unknown> | undefined | null;

export function getNsKey(key: string, params?: NsParamsType): string;

/**
 *
 * Adds namespace / prefix to keys in whitelist for given values object
 *
 * @example
 * ```
 * values = mapNsKeys({ query: "test", filters: 'active', userId: 1 }, 'users')
 * // result: { "users.query" : "test", "users.filters": "active", userId: 1 }
 * ```
 */
export function mapNsKeys(
  values: Record<string, unknown>,
  params?: NsParamsType,
): Record<string, unknown>;

/**
 * Removes namespace / prefix from keys for given values object
 *
 * @example
 * ```
 * values = removeNsKeys({ "users.query" : "test", "users.filters": "active" }, 'users')
 * // result: { query: "test", filters: 'active' }
 * ```
 */
export function removeNsKeys(
  values: Record<string, unknown>,
  params?: NsParamsType,
): Record<string, unknown>;
