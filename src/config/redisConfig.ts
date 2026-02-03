import { Redis } from "ioredis";

import ServerConfig from "./serverConfig.js";

const redisConnection = new Redis({
  host: ServerConfig.REDIS_HOST,
  port: ServerConfig.REDIS_PORT,
});

export default redisConnection;
