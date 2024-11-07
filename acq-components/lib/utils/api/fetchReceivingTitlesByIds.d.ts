import type {
  HTTPClient,
  HTTPClientOptions,
} from '@folio/stripes-acq-components';

import { fetchReceivingTitles } from './fetchReceivingTitles';

type DataShape = Awaited<ReturnType<ReturnType<typeof fetchReceivingTitles>>>

export declare function fetchReceivingTitlesByIds(httpClient: HTTPClient): (ids: string[], options: HTTPClientOptions) => Promise<DataShape>;
