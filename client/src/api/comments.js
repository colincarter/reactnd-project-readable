import axios from "axios";

const AUTH = "auth";

export default class CommentsAPI {
  static createComment(comment) {
    return axios.post(`/comments`, comment, {
      headers: { Authorization: AUTH }
    });
  }

  static editComment(comment) {
    return axios.put(`/comments/${comment.id}`, comment, {
      headers: { Authorization: AUTH }
    });
  }
}
