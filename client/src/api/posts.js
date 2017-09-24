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
    return axios.post(`/posts`, post, {
      headers: { Authorization: AUTH }
    });
  }
}
