import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const getUser = createAsyncThunk("getUser", async (searchValue) => {
  const { data } = await axios.get(`${BASE_URL}${searchValue}`);
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
      state.error = "";
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = "Something went wrong!";
    });
  },
});

export default profileSlice.reducer;

export const { setSearchValue } = profileSlice.actions;
