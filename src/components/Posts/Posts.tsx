import { useMemo, useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import Search from "./Search";
import PostI from "./type";

type Props = {
  isLoading: boolean;
  data: PostI[];
};

const Posts = ({ data, isLoading }: Props) => {
  const [search, setSeacrh] = useState<string>("");
  const filteredPosts = useMemo(() => {
    if (!data) return [];
    return data.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <AddPost />
          </div>
          <div>
            <Search search={search} setSearch={setSeacrh} />
            {filteredPosts?.map((el: PostI) => {
              return <Post key={el?.id} {...el} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
