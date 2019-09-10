"use strict";

const express = require("express");
const topicRoute = express.Router();
const pool = require("../connection/connection");

topicRoute.get("/topics/:category", (req, res) => {
  pool
    .query(
      `select * from topics where category = '${req.params.category}' order by random() limit 5`
    )
    .then(result => {
      res.send(result.rows);
    })
    .catch(e => console.log(e));
});

module.exports = topicRoute;
