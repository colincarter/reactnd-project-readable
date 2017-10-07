import { combineReducers } from "redux";
import { categories, currentCategory } from "./categories";
import posts from "./posts";
import currentSort from "./currentSort";
import comments from "./comments";
import loading from "./loading";

const rootReducer = combineReducers({
  categories,
  posts,
  currentCategory,
  currentSort,
  comments,
  loading
});
export default rootReducer;
