import defaultState from "../store/defaultState";
import { ADD_COMMENTS } from "../constants";

function comments(state = defaultState.comments, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return action.comments;

    default:
      return state;
  }
}

export default comments;
