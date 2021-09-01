// posts controller
// destructure models from models module
const { Mongoose } = require('mongoose');
const { PostMessage } = require('../models');

// get all posts asynchronous callback
const getAllPosts = async (req, res) => {
	// try-catch
	try {
		// await response from mongo post model
		const postMessages = await PostMessage.find();

		// if posts are found and no error occurs, return HTTP status code of 'OK' and the posts in json format
		res.status(200).json(postMessages);
	} catch (err) {
		// if posts are not found or error occurs, return HTTP status code 'Not Found' and error message in json format
		res.status(404).json({ message: err.message });
	}
};

// get first available colloecton
const getPostById = async (req, res) => {
	const { id: _id } = req.params;

	if (Mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send('No post with that ID');

	console.log(_id);

	const posts = await PostMessage.findById(_id);
	res.status(200).json(posts);
};

// create post asynchronous callback
const createPost = async (req, res) => {
	// get new post object from request body
	const post = req.body;
	// initialize a new post model instance
	const newPost = new PostMessage(post);

	// try-catch
	try {
		// await response from mongo post model save method
		await newPost.save();

		// if post is saved successfully and no errors occur, return HTTP status code 'Created' and new post in json format
		res.status(201).json(newPost);
	} catch (err) {
		// if post fails to save or error occurs, return HTTP status code 'Conflict' and error message in json format
		res.status(409).json({ message: err.message });
	}
};

const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	if (Mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send('No post with that ID');

	const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
		new: true,
	});

	res.status(202).json(updatedPost);
};

// export all endpoint callbacks as a module
module.exports = {
	getAllPosts,
	getPostById,
	createPost,
	updatePost,
};
