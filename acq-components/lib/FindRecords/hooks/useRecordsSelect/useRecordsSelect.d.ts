interface useRecordsSelectReturn<T> {
  allRecordsSelected: boolean;
  isRecordSelected: ({ item: T });
  resetAllSelectedRecords: () => void;
  /*
   * Clear selected records with provided ids.
   */
  resetSelectedRecordsByIds: (ids: string[]) => void;
  /*
   * Clear selected records except the ones with provided ids.
   */
  resetOtherSelectedRecordsByIds: (ids: string[]) => void;
  selectedRecordsLength: number;
  selectedRecordsMap: Record<string, T>;
  selectRecord: (record: T) => void;
  toggleSelectAll: () => void;
}

export declare function useRecordsSelect<T = unknown & { id: string }>({ records }: { records: T[] }): useRecordsSelectReturn<T>;
