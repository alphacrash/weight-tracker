import { configureStore } from "@reduxjs/toolkit";
import weightReducer from "../slices/weightSlice";

export const store = configureStore({
  reducer: {
    weight: weightReducer,
  },
});
