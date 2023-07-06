const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

io.on("connect", (socket) => {});

server.listen(config.PORT, () => {
  logger.info(`Server runing on port http://localhost:${config.PORT}`);
});
