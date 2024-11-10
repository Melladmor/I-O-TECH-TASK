import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import RenderData from "./components/RenderData";
import useFetch from "./hooks/useFetch";

function App() {
  const params = {
    url: "https://jsonplaceholder.typicode.com/todos",
  };

  return (
    <div>
      <h1 className="text-6xl font-bold underline text-red-700">
        Testing Tailwind
      </h1>
      <RenderData
        params={{ params }}
        render={({ data }: UseQueryResult<any, Error>) => {
          console.log(data);
          return (
            <div>
              <div>test </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
