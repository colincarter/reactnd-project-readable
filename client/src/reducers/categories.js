import defaultState from "../store/defaultState";
import { ADD_CATEGORIES, SET_CATEGORY } from "../constants";

export const categories = (state = defaultState.categories, action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

export const currentCategory = (
  state = defaultState.currentCategory,
  action
) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.currentCategory;

    default:
      return state;
  }
};
