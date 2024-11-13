import { useForm } from "react-hook-form";
import Input from "../FormInput.tsx/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PostI from "./type";
import { usePost } from "../../hooks/usePost";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addPost } from "../../redux/postsSlice";
import Spinner from "../Spinner";
import toast from "react-hot-toast";
import TextArea from "../FormInput.tsx/TextArea";
type Props = {
  closeModal: () => void;
};
const AddPost = ({ closeModal }: Props) => {
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
  });

  const dispatch = useAppDispatch();
  const { mutate, isPending } = usePost({
    options: {
      onSuccess: (data) => {
        dispatch(addPost(data?.data));
        reset();
        closeModal();
        toast.success("Added Successfuly");
      },
    },
  });
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input
        label="Title"
        placeholder="Title"
        type="text"
        id="title"
        register={register("title")}
        error={errors?.title}
      />
      <TextArea
        label="Description"
        placeholder="Description"
        id="body"
        register={register("body")}
        error={errors?.body}
      />
      <button
        type="submit"
        disabled={isPending}
        className="button btn_primary py-2">
        {isPending ? <Spinner /> : "Add"}
      </button>
    </form>
  );
};

export default AddPost;
