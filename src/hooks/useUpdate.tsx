import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchData from "../utils/fetchdata";
import { FetchDataParams } from "../utils/function";

export const useUpdate = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (updateParams: FetchDataParams) =>
      fetchData({ ...updateParams, method: "PUT" }),
    onSuccess: (_, variables) => {
      if (variables.url) {
        queryClient.invalidateQueries({ queryKey: [variables.url] });
      }
    },
  });

  return mutate;
};
