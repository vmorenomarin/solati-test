require("dotenv").config();
const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1/solati-test";
const { MONGO_URI } = process.env;



mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`Database connected to ${db.connection.name}.`)
  )
  .catch((error) => console.log("Cannot connect to database:", error.message));

module.exports = mongoose;
