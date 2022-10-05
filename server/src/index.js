const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
<<<<<<< HEAD

const { PORT } = process.env;
=======
>>>>>>> parent of 62fd48a... Deployment settings.

require("./database");
const app = express();

app.set("port", 4000);

/** Middlewares */
/**  Parse incoming requests with urlencoded payloads */
app.use(express.urlencoded({ extended: true }));

/**  Parse incoming requests with JSON payloads */
app.use(express.json());


// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

/** Cross-Origin Resource Sharing. Enable share resources between two domains/servers. */
app.use(cors({ origin: "*" }));

/**  HTTP request logger */
app.use(morgan("dev"));

/** Use routes to controller methods */
app.use("/conversor", require("./routes/operation.route"));
app.use("/customer", require("./routes/customer.route"));

/** Run server */
app.listen(app.get("port"), () => {
  console.log(`Server running in ${app.get("port")} port.`);
});

