import { useForm } from "react-hook-form";
import Input from "../FormInput.tsx/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PostI from "./type";
import { usePost } from "../../hooks/usePost";

const AddPost = () => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters"),
    body: yup
      .string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostI>({
    resolver: yupResolver(schema),
  });

  const { mutate } = usePost();
  const onSubmit = (data: PostI) => {
    const newData = {
      title: data.title,
      body: data.body,
      userId: 1,
    };
    mutate({
      url: "https://jsonplaceholder.typicode.com/posts",
      data: newData,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Title"
        placeholder="Title"
        type="text"
        id="title"
        register={register("title")}
        error={errors?.title}
      />
      <Input
        label="Description"
        placeholder="Title"
        type="text"
        id="body"
        register={register("body")}
        error={errors?.body}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;
