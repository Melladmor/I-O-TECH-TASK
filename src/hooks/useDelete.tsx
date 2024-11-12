import {
  MutationKey,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import fetchData from "../utils/fetchdata";

type UseDeletePropsT = {
  url: string;
  options?: UseMutationOptions<any, Error, any, MutationKey>;
};
export const useDeleteData = ({ url, options }: UseDeletePropsT) => {
  const mutate = useMutation({
    mutationFn: (deleteParams: string) =>
      fetchData({ url: `${url}/${deleteParams}`, method: "DELETE" }),
    ...options,
  });

  return mutate;
};
