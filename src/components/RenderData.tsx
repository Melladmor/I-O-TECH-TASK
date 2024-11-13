import { UseQueryResult } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { UseFetchI } from "../hooks/hooks";
import { useFetch } from "../hooks/useFetch";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setPosts } from "../redux/postsSlice";

interface RenderDataProps {
  render: (query: UseQueryResult<any, Error>, data: any[]) => JSX.Element;
  params: UseFetchI;
}

const RenderData: React.FC<RenderDataProps> = ({ render, params }) => {
  const { params: queryParams } = params;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.posts);

  const query = useFetch({
    params: queryParams,
    queryKey: queryParams?.url,
  });

  useEffect(() => {
    if (query?.isSuccess) {
      dispatch(setPosts(query?.data?.data));
    }
  }, [query?.isSuccess]);

  return <>{render(query, data)}</>;
};

export default RenderData;
