// posts component
//import deps
import React from "react";

// import subview components
import { Post } from "./post";

//import styles
import useStyles from "./styles";

// initialize posts arrow function component
const Posts = () => {
  const classes = useStyles();

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
