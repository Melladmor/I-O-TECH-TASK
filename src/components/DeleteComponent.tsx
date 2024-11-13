import Spinner from "./Spinner";

type Props = {
  onSubmit: () => void;
  cancel: () => void;
  loading: boolean;
};

const DeleteComponent = ({ loading, cancel, onSubmit }: Props) => {
  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Are you sure you want to delete?
      </h2>
      <div className="flex justify-between gap-2">
        <button className="button btn_ghost py-2 w-full" onClick={cancel}>
          Cancel
        </button>
        <button className="button btn_delete py-2 w-full" onClick={onSubmit}>
          {loading ? <Spinner /> : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default DeleteComponent;
