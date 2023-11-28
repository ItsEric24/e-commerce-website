import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categoriesArray: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategories(state, action) {
      state.categoriesArray = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export const categoriesReducer = categorySlice.reducer;
