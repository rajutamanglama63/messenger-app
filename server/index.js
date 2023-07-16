const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");
const { wrap, sessionMiddleware } = require("./utils/middleware");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

// we are making session-middleware compatible with both expess as well as io-server
io.use(wrap(sessionMiddleware));

// Bydefault io-server & express-server are different -
// previously we maintained the req, res handle and made it stateful with the help of express-session -
// so to make io-server stateful, we make existing session compatible to use in both express & io server -
// after making io-server stateful we can access user data like following
io.on("connect", (socket) => {
  socket.request.session.user.username;
});

server.listen(config.PORT, () => {
  logger.info(`Server runing on port http://localhost:${config.PORT}`);
});
