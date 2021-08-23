// imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// app initialization
const app = express();

// routers
// posts
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

// app configuration
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// env variables
require("dotenv").config();
const DB_CONN_URL = process.env.MONGO_CONN_URL;
const PORT = process.env.PORT || 5000;

// mongo connection
mongoose
  .connect(DB_CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
mongoose.set("useFindAndModify", false);
