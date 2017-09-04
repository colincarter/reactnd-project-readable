import axios from "axios";

export default class PostsAPI {
  static loadAllPosts() {
    return axios.get("/posts", {
      headers: { Authorization: "auth" }
    });
  }
}
