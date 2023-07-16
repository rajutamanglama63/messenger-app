const config = require("./config");
const RedisStore = require("connect-redis").default;
// const PgSession = require("connect-pg-simple")(session);
const session = require("express-session");
const Redis = require("ioredis");

const redisClient = new Redis();

const sessionStore = new RedisStore({
  client: redisClient,
});

// we are not using connect-pg-simple but instead we are using connect-redis

// const sessionStore = new PgSession({
//   conString: config.DATABASE_URL,
// });

const sessionMiddleware = session({
  secret: config.SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
});

const wrap = (expressMiddleware) => (socket, next) =>
  expressMiddleware(socket.request, {}, next);

module.exports = { sessionMiddleware, wrap };
