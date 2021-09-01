// posts router
// import deps
const express = require('express');

// initialize router
const router = express.Router();

// import controller modules
const { PostsController } = require('../controllers');

// destructure endpoint callbacks from controller module
const { getAllPosts, getPostById, createPost, updatePost } = PostsController;

// add routes to the router instance
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.patch('/:id', updatePost);

// export router as a module
module.exports = router;
