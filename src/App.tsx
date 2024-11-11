import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import RenderData from "./components/RenderData";
import Posts from "./components/Posts/Posts";

function App() {
  const params = {
    url: "https://jsonplaceholder.typicode.com/posts",
  };

  return (
    <div>
      <RenderData
        params={{
          params: {
            url: `${params?.url}?_limit=10`,
          },
        }}
        render={({
          data,
          isLoading,
          isFetching,
        }: UseQueryResult<any, Error>) => {
          console.log(data);
          return (
            <Posts data={data?.data} isLoading={isLoading || isFetching} />
          );
        }}
      />
    </div>
  );
}

export default App;
