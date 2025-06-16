import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "../../api/postsApi";

const LOADING_STATES = {
IDLE: 'idle', 
PENDING: 'pending',
SUCCEEDED: 'succeeded',
FAILED: 'failed',
};

export const postsAsync = createAsyncThunk("posts/fetchPosts", async (id) => {
  try {
    const response = await fetchPosts(id);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {},
    loading: LOADING_STATES.IDLE,
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
        state.loading = LOADING_STATES.PENDING;
        state.error = null;
      })
      .addCase(postsAsync.fulfilled, (state, action) => {
        state.loading = LOADING_STATES.SUCCEEDED;
        state.posts = action.payload;
      })
      .addCase(postsAsync.rejected, (state, action) => {
        state.loading = LOADING_STATES.FAILED;
        state.error = action.error.message;
      });
  },
});
export const { setPostIdInput } = postsSlice.actions;
export default postsSlice.reducer;
