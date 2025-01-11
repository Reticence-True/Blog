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

    /**
     * 根据邮箱查询用户信息
     * @param {string} email 邮箱
     * @returns {object | null} 用户数据
     */
    static async getUserByEmail(email) {
        try {
            return await userModel.findOne({ email })
        } catch (e) {
            throw new Error('数据库查询用户失败: ' + e)
        }
    }

    /**
     * 根据用户名删除用户信息
     * @param {string} username 用户名
     * @returns null
     */
    static async deleteUserByUsername(username) {
        try {
            return await userModel.deleteOne({ username })
        } catch (e) {
            throw new Error('数据库删除用户失败: ' + e)
        }
    }

    /**
     * 根据邮箱删除用户信息
     * @param {string} email 邮箱
     * @returns null
     */
    static async deleteUserByEmail(email) {
        try {
            return await userModel.deleteOne({ email })
        } catch (e) {
            throw new Error('数据库删除用户失败: ' + e)
        }
    }

    /**
     * 更新用户密码
     * @param {string} email 邮箱
     * @param {string} newPassword 新密码
     * @returns null
     */
    static async updatePassword(email, newPassword) {
        try {
            return await userModel.updateOne({ email }, { password: newPassword })
        } catch (e) {
            throw new Error('数据库更新密码失败: ' + e)
        }
    }
}

module.exports = LoginService
