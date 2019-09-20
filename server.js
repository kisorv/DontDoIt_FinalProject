"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const topicRoute = require("./routes/topic.api");
const quizRoute = require("./routes/quiz.api");

app.use(express.static(__dirname + "/dist"));

app.use(express.json());
app.use(cors());
app.use("/", topicRoute);
app.use("/", quizRoute);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port: ${port}.`));
