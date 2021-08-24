// post model
// import deps
const mongoose = require("mongoose");

// create post schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// create mongo model using post schema
const PostMessage = mongoose.model("PostMessage", postSchema);

// export post mongo model as a module
module.exports = PostMessage;
