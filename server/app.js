const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello");
});

module.exports = app;
