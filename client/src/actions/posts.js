// post actions module
// import api module
import { api } from '../api';

// import action types
import ATs from './actionTypes';
const { FETCH_ALL_POSTS, CREATE_POST, UPDATE_POST } = ATs;

// action creators
const getAllPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchAllPosts();
		dispatch({ type: FETCH_ALL_POSTS, payload: data });
	} catch (err) {
		console.log('getAllPosts', { err });
	}
};

const createPost = (newPost) => async (dispatch) => {
	try {
		const { data } = await api.createPost(newPost);
		dispatch({ type: CREATE_POST, payload: data });
	} catch (err) {
		console.log('createPost', { err });
	}
};

const updatePost = (postId, updatedPost) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(postId, updatedPost);
		dispatch({ type: UPDATE_POST, payload: data });
	} catch (err) {
		console.log('updatePost', { err });
	}
};

const postActions = {
	getAllPosts,
	createPost,
	updatePost,
};

export default postActions;
