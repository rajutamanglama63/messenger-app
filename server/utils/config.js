const dotenv = require("dotenv");

// const logger = require("./logger")

dotenv.config();

const PORT = process.env.PORT || 4000;

const SECRET = process.env.SECRET;

const DATABASE_URL = process.env.DATABASE_URL;

module.exports = { PORT, SECRET, DATABASE_URL };
