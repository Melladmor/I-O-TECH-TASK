import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from "@tanstack/react-query";
import { UseFetchI } from "./hooks";
import fetchData from "../functions/fetchdata";

type useFetchProps = UseFetchI;

const useFetch = (props: useFetchProps): UseQueryResult<any> => {
  const { params, options } = props;
  const queryKey = options?.queryKey || [params?.url];

  const query: UseQueryResult = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(params),
    select: (data) => {
      return data.data;
    },
    ...options,
  });

  return query;
};

export default useFetch;
