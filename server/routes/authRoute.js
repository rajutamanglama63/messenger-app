const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signup", authController.signupUser);

router.post("/signin", authController.signinUser);

module.exports = router;
