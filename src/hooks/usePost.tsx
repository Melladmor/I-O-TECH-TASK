import {
  MutationKey,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { FetchDataParams } from "../utils/function";
import fetchData from "../utils/fetchdata";

type UsePostProps = {
  options?: UseMutationOptions<any, Error, any, MutationKey>;
};
export const usePost = ({ options }: UsePostProps) => {
  const mutate = useMutation({
    mutationFn: (createParams: FetchDataParams) =>
      fetchData({ ...createParams, method: "POST" }),
    ...options,
  });
  return mutate;
};
