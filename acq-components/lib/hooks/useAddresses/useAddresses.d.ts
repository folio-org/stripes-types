interface Options {
  enabled?: boolean;
  tenantId?: string;
}

interface Results{
  addresses: ACQ.Address[];
  totalRecords: number;
  isFetching: boolean;
  isLoading: boolean;
}

export declare function useAddresses(options?: Options): Results;

