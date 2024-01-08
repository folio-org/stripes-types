import Logger from '../../../../util/logger';
import { ApolloConnectedSourceProps, ApolloError, ConnectedSource } from './ConnectedSource';

export default class ApolloConnectedSource implements ConnectedSource {
  constructor(props: ApolloConnectedSourceProps, logger: Logger, resourceName?: string);
  records(): unknown[];
  resultCount(): number;
  totalCount(): number | null | undefined;
  pending(): boolean;
  loaded(): boolean;
  failure(): ApolloError | null | undefined;

  failureMessage(): string;
  fetchMore(increment: number): void;
  successfulMutations(): unknown[];
}
