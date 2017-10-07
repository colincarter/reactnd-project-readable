import { combineReducers } from "redux";
import { categories, currentCategory } from "./categories";
import posts from "./posts";
import currentSort from "./currentSort";
import comments from "./comments";

const rootReducer = combineReducers({
  categories,
  posts,
  currentCategory,
  currentSort,
  comments
});
export default rootReducer;
