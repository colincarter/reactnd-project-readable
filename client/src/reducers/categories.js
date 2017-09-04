import defaultState from "../store/defaultState";
import { ADD_CATEGORIES } from "../constants";

const categories = (state = defaultState.categories, action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

const currentCategory = (state = defaultState.currentCategory, action) => {
  return state;
};

export { categories, currentCategory };
