import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchData from "../utils/fetchdata";
import { FetchDataParams } from "../utils/function";

export const useDeleteData = (url: string) => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (deleteParams: string) =>
      fetchData({ url: `${url}/${deleteParams}`, method: "DELETE" }),
    onSuccess: (_, variables) => {
      if (url) {
        queryClient.invalidateQueries({ queryKey: [url] });
      }
    },
  });

  return mutate;
};
