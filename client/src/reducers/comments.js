import defaultState from "../store/defaultState";
import {
  ADD_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from "../constants";

const comments = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return { ...state, [action.postId]: action.comments };

    case ADD_COMMENT: {
      const postId = action.comment.parentId;
      const comments = state[postId] || [];

      return {
        ...state,
        [postId]: [...comments, action.comment]
      };
    }

    case UPDATE_COMMENT: {
      const postId = action.comment.parentId;

      return {
        ...state,
        [postId]: state[postId].map(comment => {
          if (comment.id === action.comment.id) {
            return action.comment;
          }
          return comment;
        })
      };
    }

    case REMOVE_COMMENT: {
      const postId = action.comment.parentId;

      return {
        ...state,
        [postId]: state[postId].filter(
          comment => comment.id !== action.comment.id
        )
      };
    }

    default:
      return state;
  }
};

export default comments;
