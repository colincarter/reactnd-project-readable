import { get } from "lodash";
import CategoriesAPI from "../api/categories";
import { ADD_CATEGORIES } from "../constants";

export function loadCategories() {
  return async dispatch => {
    const categoriesData = await CategoriesAPI.loadCategories();
    const categories = get(categoriesData, "data.categories", []);
    dispatch(addCategories(categories));
  };
}

const addCategories = categories => {
  return {
    type: ADD_CATEGORIES,
    categories
  };
};
