import axios from "axios";

export default class CategoriesAPI {
  static loadCategories() {
    return axios.get("/categories", {
      headers: { Authorization: "auth" }
    });
  }
}
