import { UseQueryResult } from "@tanstack/react-query";
import React from "react";
import { UseFetchI } from "../hooks/hooks";
import { useFetch } from "../hooks/useFetch";

interface RenderDataProps {
  render: (query: UseQueryResult<any, Error>) => JSX.Element;
  params: UseFetchI;
}

const RenderData: React.FC<RenderDataProps> = ({ render, params }) => {
  const { params: queryParams, options } = params;
  const query = useFetch(queryParams, queryParams?.url);

  return <>{render(query)}</>;
};

export default RenderData;
