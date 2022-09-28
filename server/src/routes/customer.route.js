const { Router } = require("express");
const route = Router();
// const verifyUser = require("../middlewares/verifyUser")
const customerCtrl = require("../controllers/customer.controller");

route.get("/", customerCtrl.listCustomers);
route.post("/", customerCtrl.addCustomer);
route.post("/login", customerCtrl.login);
route.post("/user/operation", customerCtrl.operations);

module.exports = route;
