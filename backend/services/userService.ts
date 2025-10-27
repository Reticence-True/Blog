/* 用户信息服务层 */
const RedisService = require('./redisService')

class UserService {
    /**
     * 获取在线用户人数
     * @returns {Promise<String>} 在线用户人数
     */
    static async getOnlineUserNum() {
        return RedisService.get('onlineCount')
    }
}

module.exports = UserService
