// posts reducer
// import action types and destructure
import { ATs } from '../actions';
const { FETCH_ALL_POSTS, FETCH_POST_BY_ID, CREATE_POST, UPDATE_POST } = ATs;
// initialize reducer function
const posts = (state = [], action) => {
	// destructure type and payload from action
	const { type, payload } = action;

	// switch statement that handles reducer logic
	switch (type) {
		// if action type 'FETCH_ALL_POSTS',
		case FETCH_ALL_POSTS:
			return payload;
		case FETCH_POST_BY_ID:
			return payload.filter((post) => post._id !== payload._id);
		// if action type 'CREATE_POST',
		case CREATE_POST:
			return [...posts, payload];
		case UPDATE_POST:
			return posts.map((post) => (post._id === payload._id ? payload : post));
		// if none of the cases are met, just return state as is
		default:
			return state;
	}
};

// export as default function
export default posts;
