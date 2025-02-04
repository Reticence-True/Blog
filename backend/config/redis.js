/* Redis配置 */
// 加载环境变量
require('dotenv').config({
    path:
    process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development',
})
const Redis = require('ioredis')

const redisClient = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || '6379',
    password: process.env.REDIS_PASSWORD,
    // 自动重连配置
    retryStrategy(times) {
        return Math.min(times * 50, 2000)
    },
})

redisClient.on('error', (err) => {
    console.error('Redis connection error:', err)
})

redisClient.on('connect', () => {
    console.log('Redis connected successfully')
})

module.exports = redisClient
