import type {
  HTTPClient,
  HTTPClientOptions,
} from '../../typing';

interface DataShape {
  titles: ACQ.Title[];
  totalRecords: number;
}

export declare function fetchReceivingTitles(httpClient: HTTPClient): (options: HTTPClientOptions) => Promise<DataShape>;
