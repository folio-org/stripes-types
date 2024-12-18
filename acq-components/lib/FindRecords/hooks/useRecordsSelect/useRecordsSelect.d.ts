interface useRecordsSelectReturn<T> {
  allRecordsSelected: boolean;
  isRecordSelected: ({ item: T });
  resetSelectedRecords: () => void;
  selectedRecordsLength: number;
  selectedRecordsMap: Record<string, T>;
  selectRecord: (record: T) => void;
  toggleSelectAll: () => void;
}

export declare function useRecordsSelect<T = unknown & { id: string }>({ records }: { records: T[] }): useRecordsSelectReturn<T>;
