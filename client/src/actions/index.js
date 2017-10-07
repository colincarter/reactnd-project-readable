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
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
  ADD_COMMENTS,
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
    let posts = get(postData, "data", []).filter(posts => !posts.deleted);

    dispatch(addPosts(posts));

    posts.forEach(post => {
      PostsAPI.loadComments(post.id).then(result => {
        const comments = get(result, "data", []);
        dispatch(addComments(post.id, comments));
      });
    });
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

export function deleteComment(comment) {
  return async dispatch => {
    await CommentsAPI.deleteComment(comment.id);
    dispatch(removeComment(comment));
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

export function incVoteScore(post) {
  return editPost({ ...post, voteScore: post.voteScore + 1 });
}

export function decVoteScore(post) {
  return editPost({
    ...post,
    voteScore: post.voteScore - 1
  });
}

export function incCommentVoteScore(comment) {
  return editComment({ ...comment, voteScore: comment.voteScore + 1 });
}

export function decCommentVoteScore(comment) {
  return editComment({ ...comment, voteScore: comment.voteScore - 1 });
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

const addComments = (postId, comments) => {
  return {
    type: ADD_COMMENTS,
    postId,
    comments
  };
};

const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

const addPost = post => {
  return {
    type: ADD_POST,
    post
  };
};
