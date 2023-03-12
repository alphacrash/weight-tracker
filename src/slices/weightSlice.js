import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeights } from "../services/weightService";

export const fetchWeights = createAsyncThunk("weight/fetchWeightsStatus", async () => {
  return await getWeights();
});

const initialState = {
  value: [],
};

export const weightSlice = createSlice({
  name: "weight",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeights.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default weightSlice.reducer;
