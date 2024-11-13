import { Toaster } from "react-hot-toast";
import PostsLayout from "./components/Posts/PostsLayout";

function App() {
  return (
    <div className="container bg-custom-gradient">
      <PostsLayout />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
