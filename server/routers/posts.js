// posts router
// import deps
const express = require("express");

// initialize router
const router = express.Router();

// import controller modules
const { PostsController } = require("../controllers");

// destructure endpoints from controller modules
const { getAllPosts, createPost } = PostsController;

// add routes to the router instance
router.get("/", getAllPosts);
router.post("/", createPost);

// export as module
module.exports = router;
