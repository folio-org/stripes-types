import type {
  HTTPClient,
  HTTPClientOptions,
} from '../../typing';

import { fetchOrganizations } from './fetchOrganizations';

type DataShape = Awaited<ReturnType<ReturnType<typeof fetchOrganizations>>>

export declare function fetchOrganizationsByIds(httpClient: HTTPClient): (ids: string[], options: HTTPClientOptions) => Promise<DataShape>;
