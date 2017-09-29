import { get } from "lodash";
import CategoriesAPI from "../api/categories";
import PostsAPI from "../api/posts";
import CommentsAPI from "../api/comments";
import {
  ADD_CATEGORIES,
  ADD_POSTS,
  SET_CATEGORY,
  ADD_CATEGORY,
  SET_CURRENT_SORT,
  ADD_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST
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
    const posts = get(postData, "data", []).filter(posts => !posts.deleted);
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

export function createPost(post) {
  return async dispatch => {
    const postData = await PostsAPI.createPost(post);
    const postExtra = get(postData, "data", {});
    dispatch(addPost({ ...post, ...postExtra }));
  };
}

export function editPost(post) {
  return async dispatch => {
    const postData = await PostsAPI.updatePost(post);
    const updatedPost = get(postData, "data", {});
    dispatch(updatePost(updatedPost));
  };
}

export function deletePost(postId) {
  return async dispatch => {
    await PostsAPI.deletePost(postId);
    dispatch(removePost(postId));
  };
}

export function createComment(comment) {
  return async dispatch => {
    const commentData = await CommentsAPI.createComment(comment);
    const commentExtra = get(commentData, "data", {});
    dispatch(addComment({ ...comment, ...commentExtra }));
  };
}

export function editComment(comment) {
  return async dispatch => {
    const commentData = await CommentsAPI.editComment(comment);
    const updatedComment = get(commentData, "data", {});
    dispatch(updateComment(updatedComment));
  };
}

export function deleteComment(commentId) {
  return async dispatch => {
    await CommentsAPI.deleteComment(commentId);
    dispatch(removeComment(commentId));
  };
}

export function createCategory(category) {
  return {
    type: ADD_CATEGORY,
    category
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

const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId
  };
};

const updatePost = post => {
  return {
    type: UPDATE_POST,
    post
  };
};

const addComments = comments => {
  return {
    type: ADD_COMMENTS,
    comments
  };
};

const addComment = comment => {
  return {
    type: ADD_COMMENT,
    comment
  };
};

const updateComment = comment => {
  return {
    type: UPDATE_COMMENT,
    comment
  };
};

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

const addPost = post => {
  return {
    type: ADD_POST,
    post
  };
};
