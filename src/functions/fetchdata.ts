import axios, { AxiosResponse } from "axios";
import { FetchDataParams } from "./function";

export default async function fetchData<T>(
  params: FetchDataParams
): Promise<AxiosResponse<T>> {
  const apiUrl = `${params.url}${params.params ? `/${params.params}` : ""}`;
  return axios.get<T>(apiUrl);
}
