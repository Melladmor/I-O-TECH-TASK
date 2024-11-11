import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { FetchDataParams } from "../utils/function";
import fetchData from "../utils/fetchdata";

export const usePost = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (createParams: FetchDataParams) =>
      fetchData({ ...createParams, method: "POST" }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [variables.url] });
    },
  });
  return mutate;
};
