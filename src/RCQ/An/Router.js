
const express = require("express");
const routerAn = express.Router();
const An = require("./Controller");

routerAn
  .route("/An")
  .get(An.getAllAn);

module.exports = routerAn;
