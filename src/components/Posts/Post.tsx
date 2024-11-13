import PostI from "./type";
import { useDeleteData } from "../../hooks/useDelete";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { deletePost } from "../../redux/postsSlice";
import { useState } from "react";
import UpdateForm from "./UpdateForm";
import IconButton from "../IconButton";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../Modal";
import DeleteComponent from "../DeleteComponent";
import toast from "react-hot-toast";

type Props = PostI;

const Post = ({ body, title, id, userId }: Props) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { mutate, isPending } = useDeleteData({
    url: "https://jsonplaceholder.typicode.com/posts",
    options: {
      onSuccess: () => {
        dispatch(deletePost(id ? id : null));
        setIsDeleteOpen(!isDeleteOpen);
        toast.success("Deleted Successfuly");
      },
      onError: () => {
        toast.error("Somthing Went Wrong!");
      },
    },
  });
  return (
    <div className="post">
      <div className="flex justify-between">
        <div className="w-[70%]">
          <h1 className="text-[18px] mb-2 capitalize">{title}</h1>
          <p className="text-[14px] text-gray-400 text-wrap">{body}</p>
        </div>
        <div className="flex gap-2 items-start">
          <IconButton
            type="delete"
            onClick={() => setIsDeleteOpen(!isDeleteOpen)}>
            <MdDeleteOutline />
          </IconButton>
          <IconButton
            type="primary"
            onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
            <FiEdit />
          </IconButton>
        </div>
      </div>
      {isUpdateOpen && (
        <Modal
          title="Update Post"
          isOpen={isUpdateOpen}
          setIsOpen={setIsUpdateOpen}>
          <UpdateForm
            post={{ id: id, body: body, title: title, userId: userId }}
            setShowUpdateForm={setIsUpdateOpen}
          />
        </Modal>
      )}

      {isDeleteOpen && (
        <Modal isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen}>
          <DeleteComponent
            onSubmit={() => mutate(String(id))}
            cancel={() => setIsDeleteOpen(false)}
            loading={isPending}
          />
        </Modal>
      )}
    </div>
  );
};

export default Post;
