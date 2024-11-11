import React from "react";
import PostI from "./type";
import { useDeleteData } from "../../hooks/useDelete";

type Props = PostI;

const Post = ({ body, title, id }: Props) => {
  const { mutate } = useDeleteData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div className="border border-solid border-black">
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={() => mutate(String(id))}>delete</button>
    </div>
  );
};

export default Post;
