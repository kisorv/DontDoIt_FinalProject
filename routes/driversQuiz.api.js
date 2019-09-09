"use strict";

const express = require("express");
const driversRoute = express.Router();
const pool = require("../connection/connection");

driversRoute.get("/drivers", (req, res) => {
  pool.query("select * from drivers").then(result => {
    res.send(result.rows);
  });
});

module.exports = driversRoute;
