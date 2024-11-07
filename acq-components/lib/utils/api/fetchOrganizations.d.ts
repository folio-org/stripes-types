import type {
  HTTPClient,
  HTTPClientOptions,
} from '../../typing';

interface DataShape {
  organizations: ACQ.Organization[];
  totalRecords: number;
}

export declare function fetchOrganizations(httpClient: HTTPClient): (options: HTTPClientOptions) => Promise<DataShape>
