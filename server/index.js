const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server runing on port http://localhost:${config.PORT}`);
});
