import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "../../api/postsApi";

export const postsAsync = createAsyncThunk("posts/fetchPosts", async (id) => {
  try {
    const response = await fetchPosts(id);
    return response.data;
  } catch {
    throw error;
  }
});

export const postsSlice = createSlice({
  name: "Posts",
  initialState: {
    posts: null,
    loading: "idle",
    error: null,
    postIdInput: "",
  },
  reducers: {
    setPostIdInput: (state, action) => {
      state.postIdInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(postsAsync.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.posts = action.payload;
      })
      .addCase(postsAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setPostIdInput } = postsSlice.actions;
export default postsSlice.reducer;
