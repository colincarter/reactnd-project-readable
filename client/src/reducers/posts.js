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

    case UPDATE_POST: {
      const posts = state.filter(posts => posts.id !== action.post.id);
      return [...posts, action.post];
    }

    case ADD_COMMENT:
      const postId = action.comment.parentId;

      return state.map(post => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, action.comment] };
        }

        return post;
      });

    default:
      return state;
  }
};

export default posts;
