// posts router
// import deps
const express = require("express");

// initialize router
const router = express.Router();

// import controller modules
const { PostsController } = require("../controllers");

// destructure endpoint callbacks from controller module
const { getAllPosts, createPost } = PostsController;

// add routes to the router instance
router.get("/", getAllPosts);
router.post("/", createPost);

// export router as a module
module.exports = router;
