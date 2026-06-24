type CqlQueryBuilderFn<TOptions = Record<string, any>> = (
  filterKey: string,
  filterValue: ACQ.FilterValue,
  options?: TOptions,
) => string;

export const buildArrayFieldQuery: any;
export const buildDateRangeQuery: any;
export const buildMultiOptionCqlQuery: CqlQueryBuilderFn<{
  operator?: string;
  modifiers?: {
    name: string;
    value?: string;
  }[];
}>;
export const buildNumberRangeQuery: any;
export const buildDateTimeRangeQuery: any;
export const getFilterParams: any;
export const getFiltersCount: any;
export const buildFilterQuery: any;
export const buildSortingQuery: any;
export const connectQuery: any;
export const makeQueryBuilder: any;
