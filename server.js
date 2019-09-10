"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const weddingRoute = require("./routes/weddingRoute.api");
const quizRoute = require("./routes/quiz.api");

app.use(express.json());
app.use(cors());
app.use("/", weddingRoute);
app.use("/", quizRoute);

const port = 8080;
app.listen(port, () => console.log(`Server is listening on port: ${port}.`));
