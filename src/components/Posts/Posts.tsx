import AddPost from "./AddPost";
import Post from "./Post";
import PostI from "./type";

type Props = {
  isLoading: boolean;
  data: PostI[];
};

const Posts = ({ data, isLoading }: Props) => {
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
            {data?.map((el: PostI) => {
              return <Post key={el?.id} {...el} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
