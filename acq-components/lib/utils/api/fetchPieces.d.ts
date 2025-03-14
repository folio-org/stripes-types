import type {
  HTTPClient,
  HTTPClientOptions,
} from '../../typing';

interface DataShape {
  pieces: ACQ.Piece[];
  totalRecords: number;
}

export declare function fetchPieces(httpClient: HTTPClient): (options: HTTPClientOptions) => Promise<DataShape>;
