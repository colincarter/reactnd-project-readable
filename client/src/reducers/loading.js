import { SET_LOADING } from "../constants";
import defaultState from "../store/defaultState";

const loading = (state = defaultState.loading, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;

    default:
      return state;
  }
};

export default loading;
