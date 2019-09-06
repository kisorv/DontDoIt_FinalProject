"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const weddingRoute = require("./routes/weddingRoute.api");

app.use(express.json());
app.use(cors());
app.use("/", weddingRoute);

const port = 8080;
app.listen(port, () => console.log(`Server is listening on port: ${port}.`));
