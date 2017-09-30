import defaultState from "../store/defaultState";
import {
  ADD_POSTS,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT
} from "../constants";

const posts = (state = defaultState.posts, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return action.posts;

    case ADD_POST:
      return [...state, action.post];

    case REMOVE_POST:
      return state.filter(posts => posts.id !== action.postId);

    case UPDATE_POST:
      const posts = state.filter(posts => posts.id !== action.post.id);
      return [...posts, action.post];

    case ADD_COMMENT:
      const postId = action.comment.parentId;
      const newState = state.filter(post => post.id !== postId);
      const post = state.find(post => post.id === postId);
      if (post) {
        post.comments.concat().push(action.comment);
      }
      return [...newState, ...post];

    default:
      return state;
  }
};

export default posts;
