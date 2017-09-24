import defaultState from "../store/defaultState";
import { ADD_COMMENTS, ADD_COMMENT } from "../constants";

function comments(state = defaultState.comments, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return action.comments;

    case ADD_COMMENT:
      return [...state, action.comment];

    default:
      return state;
  }
}

export default comments;
