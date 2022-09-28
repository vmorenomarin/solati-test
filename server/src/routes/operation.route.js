const {Router} = require("express");
const verifyUser = require("../middlewares/verifyUser")
const route = Router();
const operationCtrl = require("../controllers/operation.controller");

// route.get("/:from_currency", conversorCtrl.getCurrency)
route.post("/", verifyUser, operationCtrl.getCurrency)

module.exports = route;