import defaultState from "../store/defaultState";
import { ADD_POSTS } from "../constants";

const posts = (state = defaultState.posts, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return action.posts;

    default:
      return state;
  }
};

export default posts;
