"use strict";

const express = require("express");
const weddingRoute = express.Router();
const pool = require("../connection/connection");

weddingRoute.get("/wedding", (req, res) => {
  pool.query("select * from wedding order by random() limit 5").then(result => {
    res.send(result.rows);
  });
});

module.exports = weddingRoute;
