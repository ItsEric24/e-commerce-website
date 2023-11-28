import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

const selectCategoriesSlice = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categoriesArray
);

export const selectCategories = createSelector(
  [selectCategoriesSlice],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
