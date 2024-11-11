import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

interface FetchDataParams {
  url: string;
  params?: string;
  data?: Record<string, any>;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}

export default async function fetchData<T>(
  params: FetchDataParams
): Promise<AxiosResponse<T>> {
  const { url, params: queryParams, data, method = "GET" } = params;

  const config: AxiosRequestConfig = {
    url,
    method,
    params: queryParams,
    data: method === "POST" || method === "PUT" ? data : undefined,
  };

  return axios.request<T>(config);
}
