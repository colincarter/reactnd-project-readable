import { combineReducers } from "redux";
import { categories, currentCategory } from "./categories";
import posts from "./posts";
import currentSort from "./currentSort";

const rootReducer = combineReducers({
  categories,
  posts,
  currentCategory,
  currentSort
});
export default rootReducer;
