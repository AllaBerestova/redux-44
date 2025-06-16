import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/usersApi";

const LOADING_STATES = {
IDLE: 'idle', 
PENDING: 'pending',
SUCCEEDED: 'succeeded',
FAILED: 'failed',
};

export const usersAsync = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await fetchUsers();
    return response.data;
  } catch(error) {
    throw error;
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: LOADING_STATES.IDLE,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(usersAsync.pending, (state) => {
        state.loading = LOADING_STATES.PENDING;
        state.error = null;
      })
      .addCase(usersAsync.fulfilled, (state, action) => {
        state.loading = LOADING_STATES.SUCCEEDED;
        state.users = action.payload;
      })
      .addCase(usersAsync.rejected, (state, action) => {
        state.loading = LOADING_STATES.FAILED;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;