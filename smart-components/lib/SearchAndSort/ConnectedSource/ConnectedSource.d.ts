import Logger from '../../../../util/logger';
import { QueryFunction } from '../makeQueryFunction';

type ApolloError = {
  message: string;
  graphQLErrors: unknown[];
  networkError: Error | null;
  extraInfo: any;
};

export interface ApolloConnectedSourceProps {
  apolloResource?: string;
  apolloRecordsKey: string;
  queryFunction: QueryFunction;
  parentData: {
    // properties directly on parentData
    loading?: boolean;
    successfulMutations?: unknown[];
    error?: ApolloError;
    fetchMore(params: {
      variables: {
        cql: string;
        offset: number;
        limit: number;
      };
      // record key is `apolloResource`
      updateQuery: (
        prev: Record<string, { records: unknown[] }>,
        params: { fetchMoreResult: unknown },
      ) => Record<string, { records: unknown[] }>;
    }): void;
  } & {
    // all within resource name (within recordsObj)
    [resourceName: string]: {
      totalRecords?: number;
    } & {
      // equals apolloRecordsKey
      [recordsKey: string]: unknown[];
    };
  };
  parentResources: {
    query: Record<string, unknown>;
  };
}

type StripesError = {
  dataKey?: string;
  httpStatus?: unknown;
  message?: string;
  module?: unknown;
  resource?: unknown;
  throwErrors?: unknown;
};

type StripesResourceType =
  | ({
      resultCount: number;
      notes?: string | boolean;
      filters?: string;
    } & {
      // called recordsObj in code
      [resourceName: string]: {
        records?: unknown[];
        hasLoaded?: boolean;
        isPending?: boolean;
        failed?: StripesError;
        other?: unknown;
        successfulMutations?: unknown[];
      };
    })
  | unknown; // these types may not be perfect; putting this to avoid errors

type StripesMutatorType =
  | {
      resultCount: {
        replace: (count: number) => void;
      };
      resultOffset: {
        replace: (offset: number) => void;
      };
      query: {
        replace: (query: unknown) => void;
        update: (query: unknown) => void;
      };
    }
  | unknown; // these types may not be perfect; putting this to avoid errors

export interface StripesConnectedSourceProps {
  // key is from resourceName
  parentResources?: StripesResourceType;
  resources?: StripesResourceType;
  parentMutator?: StripesMutatorType;
  mutator?: StripesMutatorType;
}

export interface ConnectedSource {
  records(): unknown[];

  /** Number of records retrieved so far */
  resultCount(): number;
  /**
   * Number of records in the result-set, available to be retrieved.
   *
   * For {@code StripesConnectedSource}, when there are > 10k results to a search, the `totalRecords`
   * value comes back as `999999999`, so we use that value to indicate
   * that the count is, in fact, undefined vs returning null to indicate
   * that the count has not been calculated.
   */
  totalCount(): number | null | undefined;

  /** True only during a request, false before and after */
  pending(): boolean;

  /** True only after a request, false before and during */
  loaded(): boolean;

  failure(): ApolloError | StripesError | undefined | null;

  failureMessage(): string;

  fetchMore(increment: number): void;

  successfulMutations(): unknown[];
}

export type ConnectedSourceProps = ApolloConnectedSourceProps | StripesConnectedSourceProps;

export default function makeConnectedSource(
  props: ConnectedSourceProps,
  logger: Logger,
  resourceName?: string,
): ConnectedSource | null;
