import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import locationService from "../api/location";

export const getCountries = createAsyncThunk(
  "getSearchResult",
  async (s, thunkApi) => {
    try {
      return await locationService(s);
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  results: [],
  isLoading: false,
  error: "",
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.results) {
          state.results = action.payload.results;
          state.error = "";
        } else state.error = "In valid Name Try Again";
      });
  },
});

export const { clearSearch } = SearchSlice.actions;

export default SearchSlice.reducer;
