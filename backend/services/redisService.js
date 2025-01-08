const redisClient = require('@config/redis')

class RedisService {
    /**
     * 设置键值对
     * @param {string} key 键
     * @param {string} val 值
     * @param {number} expireTime 到期时间 - 秒，默认 60s
     * @returns {Promise<boolean>} 是否设置成功
     */
    static async set(key, val, expireTime = 60) {
        try {
            await redisClient.setex(key, expireTime, val)
            return true
        } catch (e) {
            console.error('Redis set error:', e)
            return false
        }
    }

    /**
     * 获取值
     * @param {string} key 键
     * @returns {Promise<string | null>}
     */
    static async get(key) {
        try {
            return await redisClient.get(key)
        } catch (e) {
            console.error('Redis get error:', e)
            return null
        }
    }

    /**
     * 删除键
     * @param {string} key 键
     * @returns {Promise<boolean>}
     */
    static async del(key) {
        try {
            await redisClient.del(key)
            return true
        } catch (error) {
            console.error('Redis delete error:', error)
            return false
        }
    }

    /**
     * 检查键是否存在
     * @param {string} key 键
     * @returns {Promise<boolean>}
     */
    static async exists(key) {
        try {
            return (await redisClient.exists(key)) === 1
        } catch (error) {
            console.error('Redis exists error:', error)
            return false
        }
    }
}

module.exports = RedisService
