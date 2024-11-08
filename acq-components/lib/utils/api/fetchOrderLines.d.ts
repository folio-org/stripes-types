import type {
  HTTPClient,
  HTTPClientOptions,
} from '../../typing';

interface DataShape {
  poLines: ACQ.OrderLine[];
  totalRecords: number;
}

export declare function fetchOrderLines(httpClient: HTTPClient): (options: HTTPClientOptions) => Promise<DataShape>;

