const dotenv = require("dotenv");

// const logger = require("./logger")

dotenv.config();

const PORT = process.env.PORT || 4000;

module.exports = { PORT };
