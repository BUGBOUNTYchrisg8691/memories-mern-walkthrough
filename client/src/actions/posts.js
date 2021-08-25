// post actions module
// import api module
import * as api from "../api";

// import action types
import * as ats from "./actionTypes";

// action creators
export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.posts.fetchAllPosts();
    dispatch({ type: ats.FETCH_ALL_POSTS, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
