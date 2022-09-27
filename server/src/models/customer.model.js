const mongoose = require("mongoose");

const { Schema, model } = mongoose;

/** Returns a customer schema. */

const customerSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("customers", customerSchema);
