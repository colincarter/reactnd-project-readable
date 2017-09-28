import axios from "axios";

const AUTH = "auth";

export default class PostsAPI {
  static loadAllPosts() {
    return axios.get("/posts", {
      headers: { Authorization: AUTH }
    });
  }

  static loadComments(postId) {
    return axios.get(`/posts/${postId}/comments`, {
      headers: { Authorization: AUTH }
    });
  }

  static createPost(post) {
    return axios.post("/posts", post, {
      headers: { Authorization: AUTH }
    });
  }

  static updatePost(post) {
    return axios.put(`/posts/${post.id}`, post, {
      headers: { Authorization: AUTH }
    });
  }

  static deletePost(postId) {
    return axios.delete(`/posts/${postId}`, {
      headers: { Authorization: AUTH }
    });
  }
}
