import type {
  HTTPClient,
  HTTPClientOptions,
} from '../../typing';

import { fetchOrderLines } from './fetchOrderLines';

type DataShape = Awaited<ReturnType<ReturnType<typeof fetchOrderLines>>>

export declare function fetchOrderLinesByIds(httpClient: HTTPClient): (ids: string[], options: HTTPClientOptions) => Promise<DataShape>;
