import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './postsSlice'
const store = configureStore({
  reducer: {
    posts: postsSlice, // Add other reducers here if needed
  },
});

// Infer RootState and AppDispatch from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
