// posts reducer
// import action types and destructure
import { actionTypes } from "../actions";
const { FETCH_ALL_POSTS, CREATE_POST } = actionTypes;

// initialize reducer function
const postsReducer = (state = [], action) => {
  // destructure type and payload from action
  const { type, payload } = action;

  // switch statement that handles reducer logic
  switch (type) {
    case FETCH_ALL_POSTS:
      return state;
    case CREATE_POST:
      return state;
    default:
      return state;
  }
};

export default postsReducer;
