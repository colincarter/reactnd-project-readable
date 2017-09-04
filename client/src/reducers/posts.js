import defaultState from "../store/defaultState";
import { ADD_POSTS } from "../constants";

const posts = (state = defaultState.posts, action) => {
  switch (action.type) {
    case ADD_POSTS:
      console.log(action.posts);
      return action.posts;

    default:
      return state;
  }
};

export default posts;
