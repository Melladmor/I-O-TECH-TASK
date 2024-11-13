import { Toaster } from "react-hot-toast";
import PostsLayout from "./components/Posts/PostsLayout";

function App() {
  return (
    <div className="bg-custom-gradient text-white p-10 min-h-screen">
      <PostsLayout />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
