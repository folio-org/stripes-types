declare namespace ACQ {
  interface Dimensions {
    height: number;
    width: number;
  }

  type FilterValue = string | string[];

  interface Pagination {
    limit: number;
    offset: number;
  }

  type SortingOrder = 'ascending' | 'descending';

  interface Sorting {
    sorting: string;
    sortingDirection: SortingOrder;
  }

  interface Tags {
    tagList: string[];
  }

  interface Metadata {
    createdDate: string;
    createdByUserId?: string;
    createdByUsername?: string;
    updatedDate?: string;
    updatedByUserId?: string;
    updatedByUsername?: string;
  }

  interface Address {
    id: string;
    name: string;
    address?: string;
  }
}
