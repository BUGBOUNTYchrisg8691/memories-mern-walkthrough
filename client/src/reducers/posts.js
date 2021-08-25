// posts reducer
// import action types and destructure
import { actionTypes } from "../actions";
const { FETCH_ALL_POSTS, CREATE_POST } = actionTypes;

// initialize reducer function
const posts = (state = [], action) => {
  // destructure type and payload from action
  const { type, payload } = action;

  // switch statement that handles reducer logic
  switch (type) {
    // if action type 'FETCH_ALL_POSTS',
    case FETCH_ALL_POSTS:
      return payload;
    // if action type 'CREATE_POST',
    case CREATE_POST:
      return state;
    // if none of the cases are met, just return state as is
    default:
      return state;
  }
};

// export as default function
export default posts;
