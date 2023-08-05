import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: "",
  },
  reducers: {
    setSearchedText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
});

export const { setSearchedText } = searchSlice.actions;
export default searchSlice.reducer;
