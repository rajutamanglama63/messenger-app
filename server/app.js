const express = require("express");
const helmet = require("helmet");

const authRouter = require("./routes/authRoute");
const { sessionMiddleware } = require("./utils/middleware");

const app = express();

app.use(helmet());
app.use(express.json());

app.use(sessionMiddleware);

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/api/auth", authRouter);

module.exports = app;
