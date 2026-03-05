interface Options {
  enabled?: boolean;
  tenantId?: string;
}

interface Results {
  materialTypes: Array<{ id: string; name: string }>;
  isFetching: boolean;
  isLoading: boolean;
}

export declare function useMaterialTypes(options?: Options): Results;