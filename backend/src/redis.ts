import Redis from 'ioredis';

const host = process.env.REDIS_HOST || 'localhost';
const port = parseInt(process.env.REDIS_PORT, 10) || 6380;
const password = process.env.REDIS_PASSWORD || 'redis';

const options: Redis.RedisOptions = {
  host,
  port,
  password,
  retryStrategy: (times) => Math.max(times * 100, 3000),
};

export default new Redis(options);
