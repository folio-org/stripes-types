import type {
  HTTPClient,
  HTTPClientOptions,
} from '../../typing';

import { fetchOrders } from './fetchOrders';

type DataShape = Awaited<ReturnType<ReturnType<typeof fetchOrders>>>

export declare function fetchOrdersByIds(httpClient: HTTPClient): (ids: string[], options: HTTPClientOptions) => Promise<DataShape>;
