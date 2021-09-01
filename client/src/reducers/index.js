// reducers module
// import deps
import { combineReducers } from "redux";

// import all reducers
import posts from "./posts";

// combine all reducers and export
export default combineReducers({
  posts,
});
