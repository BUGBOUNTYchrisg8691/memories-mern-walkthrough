// import deps
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// instantiate env variables
require("dotenv").config();
const DB_CONN_URL = process.env.MONGO_CONN_URL;
const PORT = process.env.PORT || 5000;

// initialize app
const app = express();

// import routers module
const Routers = require("./routers");
// destructure all routers form routers module
const { PostsRouter } = Routers;
app.use("/posts", PostsRouter);

// app configuration
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// mongo connection and configuration
mongoose
  .connect(DB_CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
mongoose.set("useFindAndModify", false);
