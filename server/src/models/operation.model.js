const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/** Returns a operations schema. */
const operationSchema = new Schema(
  {
    from_currency: {
      type: String,
      required: true,
    },
    to_currency: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    result_convertion: {
      type: Number,
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("operation", operationSchema);
