const axios = require("axios");
// import axios from "axios"
const conversorCtrl = {};
var access_key = "DFFDFJ1Oax7wIpaJ4b7HQBeEvcU3E8sj"; // Hide this line on producction in enviroment file

conversorCtrl.getCurrency = async (req, res) => {
  try {
    const { from_currency, to_currency, amount } = req.params;
    const conversion = await axios.get(
      `https://apilayer.net/api/convert?${access_key}&from=${from_currency}&to=${to_currency}&amount=${amount}`
    );
    if (conversion) {
      return res.status(200).json({
        ok: true,
        data: conversion,
        message: "Succesfully Conversion.",
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: "No data found",
      message: error.essage,
    });
  }
};

module.exports = conversorCtrl;
