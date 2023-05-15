import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    theme: themeReducer,
  },
});
