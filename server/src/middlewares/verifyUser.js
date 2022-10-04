require("dotenv").config();
const jwt = require("jsonwebtoken");
const customerModel = require("../models/customer.model");

const {secret} = process.env;

const verifyToken = (req, res, next) => {
  console.log(req.headers.authorization)
  if (!req.headers.authorization) {
    return res.status(401).json({
      ok: false,
      message: "Not authorized1.",
    });
  }
  const token = req.headers.authorization.split(" ")[1];
  if (token === null) {
    return res.status(401).json({
      ok: false,
      message: "Not authorized2.",
    });
  }

  jwt.verify(token, secret, async (error, payload) => {
    if (error) {
      return res.status(401).json({
        ok: false,
        message: "Not authorized3.",
      });
    }
    const { _id } = payload;
    const customer = await customerModel.findById({ _id });
    if (!customer) {
      return res.status(401).json({
        ok: false,
        message: "Not authorized4.",
      });
    }
    req.customerid = payload._id;
    next();
  });
};

module.exports = verifyToken;
