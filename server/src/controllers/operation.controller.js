const axios = require("axios").default;
const operationModel = require("../models/operation.model");
const operationCtrl = {};
var access_key = "iTclYlua9ZdEp2qxwkXm1j3My3yaFicp"; // Hide this line on producction in enviroment file

const options = { headers: { apikey: access_key } };
operationCtrl.getCurrency = async (req, res) => {
  try {
    const { from_currency, to_currency, amount, customer } = req.body;
    const { data } = await axios.get(
      `https://api.apilayer.com/currency_data/convert?to=${to_currency}&from=${from_currency}&amount=${amount}`,
      options
    );
    if (data.result) {
      const newOperation = new operationModel({
        from_currency: data.query.from,
        to_currency: data.query.to,
        amount: data.query.amount,
        result_convertion: data.result,
        customer,
      });
      await newOperation.save();
      return res.status(201).json({
        ok: true,
        data: data,
        message: "Succesfully conversion.",
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: "No data found",
      message: error.message,
    });
  }
};

module.exports = operationCtrl;
