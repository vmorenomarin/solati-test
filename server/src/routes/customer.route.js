const { Router } = require("express");
const route = Router();
// const verifyUser = require("../middlewares/verifyUser")
const customerCtrl = require("../controllers/customer.controller");

route.get("/", customerCtrl.listCustomers);
route.post("/register", customerCtrl.addCustomer);
route.post("/login", customerCtrl.login);

module.exports = route;
