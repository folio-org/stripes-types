import type {
  HTTPClient,
  HTTPClientOptions,
} from '../../typing';

interface DataShape {
  purchaseOrders: ACQ.Order[];
  totalRecords: number;
}

export declare function fetchOrders(httpClient: HTTPClient): (options: HTTPClientOptions) => Promise<DataShape>;
