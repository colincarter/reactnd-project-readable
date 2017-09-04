import { combineReducers } from "redux";
import { categories, currentCategory } from "./categories";
import posts from "./posts";

const rootReducer = combineReducers({
  categories,
  posts,
  currentCategory
});
export default rootReducer;
