const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");
const budget = require("./api/budget");

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json()); // body parsing middleware

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// router
app.use("/api/budget", budget);

// Error Handlers, see middlewares.js
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// database connection
mongoose.connect(process.env.DATABASE_URL, (err) => {
  if (err) {
    console.error(err);
    return false;
  }
  // connection to mongo is successful, listen for requests
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
});
