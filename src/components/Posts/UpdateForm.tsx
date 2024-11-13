import { useForm } from "react-hook-form";
import Input from "../FormInput.tsx/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PostI from "./type";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updatePost } from "../../redux/postsSlice";
import { useUpdate } from "../../hooks/useUpdate";
import Spinner from "../Spinner";
import toast from "react-hot-toast";

interface UpdateFormProps {
  post: PostI;
  setShowUpdateForm: (e: boolean) => void;
}

const UpdateForm = ({ post, setShowUpdateForm }: UpdateFormProps) => {
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
    reset,
  } = useForm<PostI>({
    resolver: yupResolver(schema),
    defaultValues: { title: post.title, body: post.body },
  });

  const dispatch = useAppDispatch();

  const { mutate, isPending } = useUpdate({});

  useEffect(() => {
    reset(post);
  }, [post, reset]);

  const onSubmit = (data: PostI) => {
    const updatedData = {
      id: String(post.id),
      title: data.title,
      body: data.body,
      userId: post.userId,
    };
    mutate({
      url: `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      data: updatedData,
      method: "PUT",
    });
    setTimeout(() => {
      dispatch(updatePost(updatedData));
      reset();
      setShowUpdateForm(false);
      toast.success("Updated Successfuly");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
        placeholder="Description"
        type="text"
        id="body"
        register={register("body")}
        error={errors?.body}
      />
      <button
        type="submit"
        disabled={isPending}
        className="button btn_primary py-2">
        {isPending ? <Spinner /> : "Update"}
      </button>
    </form>
  );
};

export default UpdateForm;
