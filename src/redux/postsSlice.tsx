// src/redux/postsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number | string;
  title: string;
  body: string;
}

type PostsState = Post[];

const initialState: PostsState = [];

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      return (state = action.payload); // Replace the entire posts array
    },

    addPost: (state, action: PayloadAction<Post>) => {
      const payloadData = {
        ...action.payload,
        id: crypto.randomUUID(),
      };
      state.unshift(payloadData);
      //   return (state = [...state, payloadData]);
    },

    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    deletePost: (state, action: PayloadAction<number | string | null>) => {
      console.log(action.payload, "action.payload");
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
