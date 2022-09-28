const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/** Returns a operations schema. */
const operationSchema = new Schema(
  {
    from_currancy: {
      type: String,
      required: true,
    },
    to_curraancy: {
      type: String,
      required: true,
    },
    result_convertion: {
      type: number,
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
