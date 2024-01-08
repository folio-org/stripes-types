import { ReactNode } from 'react';

export default function useColumnManager(
  prefix: string,
  columnMapping: Record<string, ReactNode>,
  persist?: boolean,
  visibleColumnsProp?: string[],
): {
  visibleColumns: string[];
  toggleColumn: (key: string) => void;
};
