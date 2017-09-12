import defaultState from "../store/defaultState";
import { SET_CURRENT_SORT } from "../constants";

const setCurrentSort = (state = defaultState.currentSort, action) => {
  switch (action.type) {
    case SET_CURRENT_SORT:
      return action.currentSort;

    default:
      return state;
  }
};

export default setCurrentSort;
