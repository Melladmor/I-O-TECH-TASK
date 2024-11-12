import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import RenderData from "./components/RenderData";
import Posts from "./components/Posts/Posts";
import { useAppSelector } from "./hooks/reduxHooks";

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
          queryKey: "posts",
        }}
        render={({ isLoading, isFetching }, data) => {
          return <Posts data={data} isLoading={isLoading || isFetching} />;
        }}
      />
    </div>
  );
}

export default App;
