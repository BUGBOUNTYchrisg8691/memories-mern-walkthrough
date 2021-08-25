// api module
// import deps
import axios from "axios";

// initialize base url
const postUrl = "http://localhost:5000/posts";

// initialize fetch posts api call
export const fetchAllPosts = () => axios.get(postUrl);
