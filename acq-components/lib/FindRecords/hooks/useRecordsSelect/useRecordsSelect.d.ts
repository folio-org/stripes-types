interface useRecordsSelectReturn<T> {
  allRecordsSelected: boolean;
  selectedRecordsMap: Record<string, T>;
  selectedRecordsLength: number;
  toggleSelectAll: () => void;
  selectRecord: (record: T) => void;
  isRecordSelected: ({ item: T });
}

export declare function useRecordsSelect<T = unknown & { id: string }>({ records }: { records: T[] }): useRecordsSelectReturn<T>;
