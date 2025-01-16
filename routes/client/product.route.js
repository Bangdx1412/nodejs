const express = require("express");
const route = express.Router();
//Nhung controller cua product vao
const controller = require("../../controllers/client/product.controller");
route.get("/", controller.index);

module.exports = route;
