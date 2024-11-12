import { useQuery, UseQueryResult } from "@tanstack/react-query";
import fetchData from "../utils/fetchdata";
import { UseFetchI } from "./hooks";

type UseFetchProps = UseFetchI;

export const useFetch = ({ params, queryKey, options }: UseFetchProps) => {
  const query: UseQueryResult<any, Error> = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData({ ...params, method: "GET" }),
    ...options,
  });

  return query;
};
