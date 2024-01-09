import { FilterGroupsConfig } from '../../../components';
import Logger from '../../../util/logger';
import { NsParamsType } from './nsQueryFunctions';

/**
 * Returns a string, or null, which stripes-connect will use to construct a resource query.
 *
 * Accepts four params:
 * @param queryParams An object containing the UI URL's query parameters (as accessed by ?{name}).
 * @param pathComponents An object containing the UI URL's path components (as accessed by :{name}).
 * @param resourceData An object containing the component's resources' data (as accessed by %{name}).
 * @param logger A logger object.
 */
export type QueryFunction = (
  queryParams: Record<string, unknown>,
  pathComponents: Record<string, unknown>,
  resourceData: { query: Record<string, unknown> },
  logger: Logger,
) => string | null;

/**
 * Builds a {@link QueryFunction}
 *
 * @param findAll CQL query to retrieve all records when there is a sort clause but no CQL query
 * @param queryTemplate CQL query to interpolate, or function which will return CQL
 * @param sortMap map from sort keys to CQL fields
 * @param filterConfig list of filter objects, see {@link FilterGroupsConfig}
 * @param failOnCondition one of the following:
 *   - 0 (or false (legacy)): do not fail even if query and filters and empty
 *   - 1 (or true (legacy)): fail if query is empty, whatever the filter state
 *   - 2: fail if both query and filters and empty
 * @param nsParams namespace keys
 * @param configOrEscape an object containing configuration parameters:
 *   - escape: whether to escape the query string (default true)
 *   - rightTrunc: whether to right-truncate the query string (default true)
 * For backwards compatibility, this parameter may also be a boolean, in which case it is used as the `escape` configuration value.
 */
export default function makeQueryFunction(
  findAll: string,
  queryTemplate:
    | string
    | ((
        nsQueryParams: Record<string, unknown>,
        pathComponents: Record<string, unknown>,
        queryObj: { query: Record<string, unknown> },
      ) => string),
  sortMap: Record<string, string>,
  filterConfig: FilterGroupsConfig,
  failOnCondition: 0 | 1 | 2 | true | false,
  nsParams: NsParamsType,
  configOrEscape: boolean | { escape?: boolean; rightTrunc?: boolean },
): QueryFunction;
