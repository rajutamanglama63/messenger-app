const express = require("express");
const router = express.Router();

const signup = require("../controllers/signup");
const signin = require("../controllers/signin");

router.post("/signup", (req, res) => {
  signup(req, res);
});

router.post("/signin", (req, res) => {
  signin(req, res);
});

module.exports = router;
