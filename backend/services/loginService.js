/* 登录服务层 */
const userModel = require('@models/userModel')

class LoginService {
    /**
     * 根据用户名查询用户信息
     * @param {string} username 用户名
     * @returns {object | null} 用户数据
     */
    static async getUserByUsername(username) {
        try {
            return await userModel.findOne({ username })
        } catch (e) {
            throw new Error('数据库查询用户失败: ' + e)
        }
    }
}

module.exports = LoginService
