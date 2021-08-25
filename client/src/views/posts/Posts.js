// posts component
//import deps
import React from "react";
import { useSelector } from "react-redux";

// import subview components
import { Post } from "./post";

//import styles
import useStyles from "./styles";

// initialize posts arrow function component
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log({ posts });

  return (
    <>
      <h1>Post</h1>
      <Post />
      <Post />
    </>
  );
};

// export posts component
export default Posts;
