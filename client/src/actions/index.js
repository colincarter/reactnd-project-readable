import { get } from "lodash";
import CategoriesAPI from "../api/categories";
import PostsAPI from "../api/posts";
import {
  ADD_CATEGORIES,
  ADD_POSTS,
  SET_CATEGORY,
  SET_CURRENT_SORT,
  ADD_COMMENTS
} from "../constants";

export function loadCategories() {
  return async dispatch => {
    const categoriesData = await CategoriesAPI.loadCategories();
    const categories = get(categoriesData, "data.categories", []);
    dispatch(addCategories(categories));
  };
}

export function loadAllPosts() {
  return async dispatch => {
    const postData = await PostsAPI.loadAllPosts();
    const posts = get(postData, "data", []);
    dispatch(addPosts(posts));
  };
}

export function loadCommentsForPost(postId) {
  return async dispatch => {
    const commentData = await PostsAPI.loadComments(postId);
    const comments = get(commentData, "data", []);
    dispatch(addComments(comments));
  };
}

export function setCurrentCategory(currentCategory) {
  return {
    type: SET_CATEGORY,
    currentCategory
  };
}

export function setCurrentSort(currentSort) {
  return {
    type: SET_CURRENT_SORT,
    currentSort
  };
}

const addCategories = categories => {
  return {
    type: ADD_CATEGORIES,
    categories
  };
};

const addPosts = posts => {
  return {
    type: ADD_POSTS,
    posts
  };
};

const addComments = comments => {
  return {
    type: ADD_COMMENTS,
    comments
  };
};
