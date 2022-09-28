// require("dotenv").config();
const customerCtrl = {};
const customerModel = require("../models/customer.model");
const jsw = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("../middlewares/auth.middleware");

// Next line will be delete. This is for test purposes.
const secret = "Soy_Batman";

customerCtrl.listCustomers = async (req, res) => {
  /** Returns all customers in database.**/
  try {
    const customers = await customerModel.find({});
    res.status(200).json({
      ok: true,
      data: customers,
      message: "message",
    });
  } catch (error) {
    res.status(404).json({
      ok: false,
      data: "",
      message: error.message,
    });
  }
};

customerCtrl.addCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    /** Customer existence validation */
    const customer = await customerModel.findOne({ email });
    if (customer) {
      return res.status(409).json({
        ok: false,
        data: "",
        message: "User already exists.",
      });
    }
    /** Creates and saves the customer based in the customer model database. */
    const newCustomer = new customerModel({
      email,
      password: auth.encryptPassword(password),
    });
    await newCustomer.save();
    /** Returns user token. */
    const token = jsw.sign({ _id: newCustomer._id }, secret, {
      expiresIn: "1h",
    });
    res.status(201).json({
      ok: true,
      data: token,
      message: `User account created. Welcome ${newCustomer.email}`,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: "",
      message: error.message,
    });
  }
};

customerCtrl.login = async (req, res) => {
  /** Login user. Returns token if user credetials are valid. */
  try {
    const { email, password } = req.body;
    const customer = await customerModel.findOne({ email });
    if (!customer) {
      return res.status(404).json({
        ok: false,
        data: "",
        message: `User with ${email} not found.`,
      });
    }
    const response = bcrypt.compareSync(password, customer.password);
    if (response) {
      const token = jsw.sign({ _id: customer._id }, secret, {
        expiresIn: "1h",
      });
      return res.status(201).json({
        ok: true,
        data: token,
        message: `User account created. Welcome ${customer.email}`,
      });
    }
    res.status(500).json({
      ok: false,
      data: "",
      message: `${customer.email}, wrong password. Please try again.`,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: "",
      message: error.message,
    });
  }
};

customerCtrl.convert = async (req, res) => {
  
};
module.exports = customerCtrl;
