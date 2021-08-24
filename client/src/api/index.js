import axios from "axios";

const postUrl = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(postUrl);
