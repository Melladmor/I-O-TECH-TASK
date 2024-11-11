import { UseQueryOptions } from "@tanstack/react-query";
import { FetchDataParams } from "../utils/function";

export interface UseFetchI {
  params: FetchDataParams;
  options?: UseQueryOptions<any, Error, any, QueryKey>;
}
