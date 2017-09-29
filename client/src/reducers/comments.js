import defaultState from "../store/defaultState";
import {
  ADD_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from "../constants";

function comments(state = defaultState.comments, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return action.comments;

    case ADD_COMMENT:
      return [...state, action.comment];

    case UPDATE_COMMENT:
      const comments = state.filter(
        comment => comment.id !== action.comment.id
      );
      return [...comments, action.comment];

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId);

    default:
      return state;
  }
}

export default comments;
