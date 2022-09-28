const {Router} = require("express");
const route = Router();
const conversorCtrl = require("../controllers/conversor.controller");

// route.get("/:from_currency", conversorCtrl.getCurrency)
route.get("/", conversorCtrl.getCurrency)

module.exports = route;


