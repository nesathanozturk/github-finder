import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const getUser = createAsyncThunk("getUser", async (searchValue) => {
  const res = await axios.get(`${BASE_URL}${searchValue}`);
  const data = await res.data;
  return data;
});

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    users: [],
    searchValue: "",
    loading: false,
    error: "",
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default profileSlice.reducer;

export const { setSearchValue } = profileSlice.actions;
