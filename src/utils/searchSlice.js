import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: "",
    cachedResults: {},
  },
  reducers: {
    setSearchedText: (state, { payload }) => {
      state.searchText = payload;
    },
    setCachedResults: (state, { payload }) => {
      state.cachedResults = { ...state.cachedResults, ...payload };
    },
  },
});

export const { setSearchedText, setCachedResults } = searchSlice.actions;
export default searchSlice.reducer;
