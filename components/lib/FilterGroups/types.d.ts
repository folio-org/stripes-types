import { ReactNode } from 'react';

/**
 * The values to filter on. These can be strings (typical, will be the query
 * value and displayed on the page), or an object enabling more customization.
 */
export type FilterGroupsConfigValue =
  | string
  | {
      /** The name used internally for the filter checkbox's `name` */
      name: string;
      /** Optional display name used on the page (useful for i18n) */
      displayName?: ReactNode;
      /** The value used in CQL queries */
      cql: string;
      /** If the value should be hidden **and the filter always applied** */
      hidden?: boolean;
    };

/**
 * The configuration for a single filter group.
 */
export type FilterGroupsConfigGroup = {
  /** The human-readable label that is used when presenting the group on a page */
  label: string;
  /** The name used internally for the filter group */
  name: string;
  /**
   * The name of the CQL index that corresponds to the filter group, and which will
   * be used in queries to find records that satisfy particular settings of the
   * filters in the group. In general, this will be the name of a field, or maybe
   * subfield, in the schema for the kind of records under consideration.
   */
  cql: string;
  /** A list of the possible values that may be selected for the filter */
  values: FilterGroupsConfigValue[];
  /**
   * A boolean indicating how to behave when all the filters in the group are
   * selected. When `false` (default), this is taken to mean no restriction is
   * intended, and so that filter group makes no contribution to the query.
   * However, if this is `true`, then a query clause is always included. (See
   * [STCOM-204](https://issues.folio.org/browse/STCOM-204) for rationale.)
   */
  restrictWhenAllSelected?: boolean;
  /** An optional function which can be used to convert filter values into a CQL manually */
  parse?: (value: string[]) => string;
  /** An optional string which can be used to change matching operator */
  operator?: string;
} & (
  | {
      // these are only available if isRange=true

      /** The flag that is used to build range cql query. */
      isRange: true;
      /** The flag to include boundary value from the start. Requires `isRange: true` */
      isIncludingStart?: boolean;
      /** The flag to include boundary value from the end. Requires `isRange: true` */
      isIncludingEnd?: boolean;
      /** The string to break range value to `start` and `end` values. Requires `isRange: true` */
      rangeSeparator?: string;
    }
  | {
      /** The flag that is used to build range cql query. */
      isRange?: false;
      // need these to prevent union with above including extra props
      /** Set prop `isRange: true` to use this */
      isIncludingStart?: never;
      /** Set prop `isRange: true` to use this */
      isIncludingEnd?: never;
      /** Set prop `isRange: true` to use this */
      rangeSeparator?: never;
    }
);

export type FilterGroupsState = Record<string, boolean>;
export type FilterGroupsConfig = FilterGroupsConfigGroup[];
