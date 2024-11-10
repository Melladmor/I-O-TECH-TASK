import { UseQueryResult } from "@tanstack/react-query";
import React from "react";
import useFetch from "../hooks/useFetch";
import { UseFetchI } from "../hooks/hooks";

interface RenderDataProps {
  render: (query: UseQueryResult<any, Error>) => JSX.Element;
  params: UseFetchI;
}

const RenderData: React.FC<RenderDataProps> = ({ render, params }) => {
  const { params: queryParams, options } = params;
  const query = useFetch({ params: queryParams, options });

  return <>{render(query)}</>;
};

export default RenderData;
