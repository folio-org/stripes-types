export default function advancedSearchQueryToRows(queryValue?: string | null): {
  query: string;
  bool: string;
  searchOption: string;
  match: string;
}[];
