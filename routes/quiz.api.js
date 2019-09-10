"use strict";

const express = require("express");
const quizRoute = express.Router();
const pool = require("../connection/connection");

quizRoute.get("/quiz/:category", (req, res) => {
  pool
    .query(
      `select * from quiz where category = '${req.params.category}' order by random()`
    )
    .then(result => {
      res.send(result.rows);
    })
    .catch(e => console.log(e));
});

module.exports = quizRoute;
