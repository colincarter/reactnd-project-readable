import { ALL_POSTS } from "../constants";

const defaultState = {
  categories: [],
  currentCategory: ALL_POSTS,
  posts: [],
  comments: {},
  currentSort: ""
};

export default defaultState;
