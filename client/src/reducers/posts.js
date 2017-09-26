import defaultState from "../store/defaultState";
import { ADD_POSTS, ADD_POST, REMOVE_POST } from "../constants";

const posts = (state = defaultState.posts, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return action.posts;

    case ADD_POST:
      return [...state, action.post];

    case REMOVE_POST:
      return state.filter(posts => posts.id !== action.postId);

    default:
      return state;
  }
};

export default posts;
