import { sortBy } from "lodash";
import defaultState from "../store/defaultState";
import { ADD_CATEGORIES, SET_CATEGORY, ADD_CATEGORY } from "../constants";

export const categories = (state = defaultState.categories, action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return sortBy(action.categories, ["name", "path"]);

    case ADD_CATEGORY:
      if (state.find(category => category.name === action.category)) {
        return state;
      }

      const newState = [
        ...state,
        { name: action.category, path: action.category }
      ];

      return sortBy(newState, ["name", "path"]);

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
