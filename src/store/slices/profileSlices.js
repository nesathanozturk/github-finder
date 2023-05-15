import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    searchValue: "",
  },
  reducers: {},
});

export default profileSlice.reducer;
