// post actions module
// import api module
import { api } from "../api";

// import action types
import ATs from "./actionTypes";

// action creators
const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts();
    dispatch({ type: ATs.FETCH_ALL_POSTS, payload: data });
  } catch (err) {
    console.log("getAllPosts", { err });
  }
};

const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({ type: ATs.CREATE_POST, payload: data });
  } catch (err) {
    console.log("createPost", { err });
  }
};

const postActions = {
  getAllPosts,
  createPost,
};

export default postActions;
