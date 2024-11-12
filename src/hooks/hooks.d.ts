import { QueryOptions, UseQueryOptions } from "@tanstack/react-query";
import { FetchDataParams } from "../utils/function";

export interface UseFetchI {
  params: FetchDataParams;
  queryKey?: string;
  options?: UseQueryOptions<any, Error, any, QueryKey>; // This should work for onSuccess
}
