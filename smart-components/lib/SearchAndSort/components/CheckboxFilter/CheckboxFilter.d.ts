import { Component } from 'react';

export interface CheckboxFilterProps<ValueType extends string | number> {
  dataOptions: { value: ValueType; label: string; readOnly?: boolean; disabled?: boolean }[];
  name: string;
  onChange: (args: { name: string; values: ValueType[] }) => void;
  selectedValues: ValueType[];
}

export default class CheckboxFilter<
  ValueType extends string | number = string | number,
> extends Component<CheckboxFilterProps<ValueType>> {}
