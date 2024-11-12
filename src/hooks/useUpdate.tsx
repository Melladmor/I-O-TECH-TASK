import {
  MutationKey,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import fetchData from "../utils/fetchdata";
import { FetchDataParams } from "../utils/function";

type UseUpdateProps = {
  options?: UseMutationOptions<any, Error, any, MutationKey>;
};
export const useUpdate = ({ options }: UseUpdateProps) => {
  const mutate = useMutation({
    mutationFn: (updateParams: FetchDataParams) =>
      fetchData({ ...updateParams, method: "PUT" }),
    ...options,
  });

  return mutate;
};
