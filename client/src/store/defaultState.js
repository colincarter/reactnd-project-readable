import { ALL_POSTS } from "../constants";

const defaultState = {
  categories: [],
  currentCategory: ALL_POSTS,
  posts: [],
  comments: {},
  currentSort: "",
  loading: false
};

export default defaultState;
