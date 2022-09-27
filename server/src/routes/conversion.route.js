const {Router} = require("express");
const route = Router();
const conversorCtrl = require("../controllers/conversor.controller");

route.get("/", conversorCtrl.getCurrency)

module.exports = route;


