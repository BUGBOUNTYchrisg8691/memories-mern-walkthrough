// api module
// import deps
import axios from 'axios';

// initialize base url
const postsUrl = 'http://localhost:5000/posts';

// initialize fetch posts api call
const fetchAllPosts = () => axios.get(postsUrl);
// export const fetchAllPosts = () => axios.get(postsUrl);

const createPost = (newPost) => axios.post(postsUrl, newPost);
// export const createPost = (newPost) => axios.post(postsUrl, newPost);

const updatePost = (postId, updatedPost) =>
	axios.patch(postsUrl + '/' + postId, updatedPost);

const api = {
	fetchAllPosts,
	createPost,
	updatePost,
};

export default api;
