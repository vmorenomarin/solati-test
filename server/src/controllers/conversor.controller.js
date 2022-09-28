const axios = require("axios").default;
const conversorCtrl = {};
var access_key = "iTclYlua9ZdEp2qxwkXm1j3My3yaFicp"; // Hide this line on producction in enviroment file

const options = { headers: { apikey: access_key } };
conversorCtrl.getCurrency = async (req, res) => {
  try {
    const { from_currency, to_currency, amount } = req.query;
    const { data } = await axios.get(
      `https://api.apilayer.com/currency_data/convert?to=${to_currency}&from=${from_currency}&amount=${amount}`,
      options
    );
    if (data) {
      return res.status(200).json({
        ok: true,
        data: data.result,
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
