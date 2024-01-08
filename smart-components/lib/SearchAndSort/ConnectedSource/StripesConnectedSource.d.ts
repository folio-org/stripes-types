import { StripesConnectedSourceProps, ConnectedSource, StripesError } from './ConnectedSource';
import Logger from '../../../../util/logger';

export default class StripesConnectedSource implements ConnectedSource {
  constructor(props: StripesConnectedSourceProps, logger: Logger, resourceName?: string);
  update(props: StripesConnectedSourceProps, resourceName?: string): void;
  records(): unknown[];
  resultCount(): number;
  totalCount(): number | null | undefined;
  pending(): boolean;
  loaded(): boolean;
  failure(): StripesError | null | undefined;
  failureMessage(): string;
  fetchMore(increment: number): void;
  fetchByBrowsePoint(browsePoint: unknown): void;
  fetchOffset(index: number): void;
  successfulMutations(): unknown[];
}
