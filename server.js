"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const topicRoute = require("./routes/topic.api");
const quizRoute = require("./routes/quiz.api");

app.use(express.json());
app.use(cors());
app.use("/", topicRoute);
app.use("/", quizRoute);

const port = 8080;
app.listen(port, () => console.log(`Server is listening on port: ${port}.`));
