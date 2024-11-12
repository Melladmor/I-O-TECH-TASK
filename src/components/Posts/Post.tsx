import PostI from "./type";
import { useDeleteData } from "../../hooks/useDelete";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { deletePost } from "../../redux/postsSlice";
import { UseQueryResult } from "@tanstack/react-query";
import { useState } from "react";
import UpdateForm from "./UpdateForm";

type Props = PostI;

const Post = ({ body, title, id, userId }: Props) => {
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { mutate } = useDeleteData({
    url: "https://jsonplaceholder.typicode.com/posts",
    options: {
      onSuccess: ({ data }: UseQueryResult) => {
        console.log("dalete data", data);
        dispatch(deletePost(id ? id : null));
      },
    },
  });
  return (
    <div className="border border-solid border-black">
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={() => mutate(String(id))}>delete</button>
      <button onClick={() => setShowUpdateForm(!showUpdateForm)}>Update</button>

      {showUpdateForm ? (
        <UpdateForm
          post={{ id: id, body: body, title: title, userId: userId }}
          setShowUpdateForm={setShowUpdateForm}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
