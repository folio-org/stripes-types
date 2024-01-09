import { ReactNode } from 'react';

export interface MultiSelectionFilterProps {
  dataOptions: { label?: ReactNode; value?: ReactNode }[];
  name: string;
  onChange: (args: { name: string; values: string[] }) => void;
  selectedValues?: string[];
}

export default function MultiSelectionFilter(props: MultiSelectionFilterProps): JSX.Element;
