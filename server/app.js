const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const PgSession = require("connect-pg-simple")(session);

const authRouter = require("./routes/authRoute");
const config = require("./utils/config");

const app = express();

const sessionStore = new PgSession({
  conString: config.DATABASE_URL,
});

app.use(helmet());
app.use(express.json());

app.use(
  session({
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/api/auth", authRouter);

module.exports = app;
