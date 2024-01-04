import { ChangeEventHandler, FunctionComponent } from 'react';
import { FilterGroupsConfigGroup, FilterGroupsState } from './types';
import { FilterAccordionHeaderProps } from '../Accordion';

export const FILTER_SEPARATOR: string;
export const FILTER_GROUP_SEPARATOR: string;

export type TransitionToParamsFunc = (params: { filters: string; query?: string }) => void;
export type QueryParamFunc = (key: 'filters') => string | undefined;

/** @deprecated use {@link filterState} instead */
export function initialFilterState(
  config: FilterGroupsConfigGroup[],
  filters?: string,
): FilterGroupsState;

export function filterState(filters?: string): FilterGroupsState;

export function filters2cql(config: FilterGroupsConfigGroup[], filters: string): string | undefined;

/** @deprecated use {@link handleFilterChange} */
export function onChangeFilter(e: any): void;

/** Handles changing a filter via checkbox. Relies on caller providing both `queryParam` and `transitionToParams`. */
export function handleFilterChange(
  this: {
    transitionToParams: TransitionToParamsFunc;
    queryParam: QueryParamFunc;
  },
  e: ChangeEventHandler<HTMLInputElement>,
): FilterGroupsState;

/** Handles clearing a filter. Relies on caller providing both `queryParam` and `transitionToParams`. */
export function handleFilterClear(
  this: {
    transitionToParams: TransitionToParamsFunc;
    queryParam: QueryParamFunc;
  },
  name: string,
): FilterGroupsState;

/** Handles clearing all filters. Expects `transitionToParams` and `props` with `initialFilters` to be provided by caller. */
export function handleClearAllFilters(this: {
  transitionToParams: TransitionToParamsFunc;
  props: { initialFilters?: string };
}): void;

export interface FilterGroupsProps {
  /** Configuration for the filter groups */
  config: FilterGroupsConfigGroup[];
  /** Current filter state, as an object */
  filters: FilterGroupsState;
  /** React to changes in the filter via checkbox */
  onChangeFilter: ChangeEventHandler<HTMLInputElement>;
  /** Called when a filter is cleared entirely */
  onClearFilter: FilterAccordionHeaderProps['onClearFilter'];
  /** Optionally disable a filter group by name */
  disableNames?: Record<string, boolean | undefined>;
}

declare const FilterGroups: FunctionComponent<FilterGroupsProps>;
export default FilterGroups;
