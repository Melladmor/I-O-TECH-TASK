import RenderData from "../RenderData";
import Posts from "./Posts";

const PostsLayout = () => {
  const params = {
    url: "https://jsonplaceholder.typicode.com/posts",
  };
  return (
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
  );
};

export default PostsLayout;
