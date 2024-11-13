import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string | number;
  title: string;
  body: string;
  useeId?: string;
}

type PostsState = Post[];

const initialState: PostsState = [];

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.length = 0;
      state.push(...action.payload);
    },

    addPost: (state, action: PayloadAction<Post>) => {
      const payloadData = {
        ...action.payload,
        id: crypto.randomUUID(),
      };
      state.unshift(payloadData);
    },

    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    deletePost: (state, action: PayloadAction<number | string | null>) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
