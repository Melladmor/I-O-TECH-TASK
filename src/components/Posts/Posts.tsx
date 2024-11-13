import { useMemo, useState } from "react";
import Post from "./Post";
import Search from "./Search";
import PostI from "./type";

type Props = {
  isLoading: boolean;
  data: PostI[];
};

const Posts = ({ data, isLoading }: Props) => {
  const [search, setSeacrh] = useState<string>("");
  const [sortField, setSortField] = useState<"title" | "body">("title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const filteredPosts: PostI[] = useMemo(() => {
    if (!data) return [];

    const filtered = data.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const fieldA = a[sortField].toLowerCase();
      const fieldB = b[sortField].toLowerCase();

      if (sortOrder === "asc") {
        return fieldA > fieldB ? 1 : -1;
      } else {
        return fieldA < fieldB ? 1 : -1;
      }
    });
  }, [data, search, sortField, sortOrder]);

  return (
    <div>
      <Search search={search} setSearch={setSeacrh} />

      <div className="mt-10">
        <div className="flex xs:justify-between space-x-4 mb-4">
          <button
            onClick={() => {
              setSortField("title");
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
            className="button btn_ghost shadow-none py-2 text-black">
            Sort by Title{" "}
            {sortOrder === "asc" && sortField === "title" ? "↓" : "↑"}
          </button>

          <button
            onClick={() => {
              setSortField("body");
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
            className="button btn_ghost shadow-none py-2 text-black">
            Sort by Description{" "}
            {sortOrder === "asc" && sortField === "body" ? "↓" : "↑"}
          </button>
        </div>
        {filteredPosts?.length !== 0 ? (
          <div>
            {isLoading
              ? "Loading"
              : filteredPosts?.map((el: PostI) => {
                  return <Post key={el?.id} {...el} />;
                })}
          </div>
        ) : (
          <h2 className="text-lg mt-10 w-full text-center">No Data Found!</h2>
        )}
      </div>
    </div>
  );
};

export default Posts;
