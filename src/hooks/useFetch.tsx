import {
  useQuery,
  useQueryClient,
  useMutation,
  UseQueryResult,
} from "@tanstack/react-query";
import { FetchDataParams } from "../utils/function";
import fetchData from "../utils/fetchdata";

// Generic Fetch Hook
export const useFetch = (
  fetchParams: FetchDataParams,
  queryKey: string | any[]
) => {
  const query: UseQueryResult = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData({ ...fetchParams, method: "GET" }),
    staleTime: 5000,
  });

  return query;
};
