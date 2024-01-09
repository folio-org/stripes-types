import { Ref } from 'react';
import { PopperPlacement } from '../../../../../components';

export interface DateRangeFilterProps {
  dateFormat?: string;
  focusRef?: Ref<HTMLInputElement>;
  makeFilterString: (startDate: string, endDate: string) => string;
  name: string;
  /** string provided is from makeFilterString */
  onChange: (args: { name: string; values: [string] }) => void;
  placement?: PopperPlacement;
  selectedValues: {
    endDate: string;
    startDate: string;
  };
}

export default function DateRangeFilter(props: DateRangeFilterProps): JSX.Element;
