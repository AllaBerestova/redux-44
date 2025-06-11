import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/usersApi";

export const usersAsync = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await fetchUsers();
    return response.data;
  } catch {
    throw error;
  }
});

export const usersSlice = createSlice({
  name: "Users",
  initialState: {
    users: [],
    loading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(usersAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(usersAsync.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.users = action.payload;
      })
      .addCase(usersAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;