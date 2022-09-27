const { Router } = require("express");
const route = Router();
const customerCtrl = require("../controllers/customer.controller");

route.get("/", customerCtrl.listCustomers);
route.post("/", customerCtrl.addCustomer);
route.post("/login", customerCtrl.login);

module.exports = route;
