/* 注册服务层 */
const userModel = require('@models/userModel')

class RegisterService {
    /**
     * 存储用户
     * @param {object} userData 用户数据
     * @returns {Promise<string>} 注册结果
     */
    static async createUser(userData) {
        try {
            // 存储用户表数据
            await userModel.create(userData)
            return 'ok'
        } catch (e) {
            throw new Error('error ' + e)
        }
    }

    /**
     * 根据用户名查找用户
     * @param {string} username 用户名
     * @returns {Promise<object>} 用户数据
     */
    static async getUserByUsername(username) {
        try {
            return await userModel.findOne({ username })
        } catch (e) {
            throw new Error('error ' + e)
        }
    }

    /**
     * 根据邮箱查找用户
     * @param {string} email 邮箱
     * @returns {Promise<object>} 用户数据
     */
    static async getUserByEmail(email) {
        try {
            return await userModel.findOne({ email })
        } catch (e) {
            throw new Error('error ' + e)
        }
    }

    // /**
    //  * 创建验证码用户
    //  * @param {object} userInfo 用户名和邮箱
    //  * @returns {Promise<boolean>} 是否存储成功
    //  */
    // static async createVarifyCodeUser(userInfo) {
    //     try {
    //         await authModel.create({
    //             userInfo,
    //             createTime: customMoment.formatNow(),
    //         })
    //         return true
    //     } catch (e) {
    //         throw new Error('验证码用户存储失败，Error:' + e)
    //     }
    // }

    // /**
    //  * 根据用户名查找最新验证码信息
    //  * @param {string} userEmail 邮箱
    //  * @returns {Promise<object>} 验证数据
    //  */
    // static async getVarifyCode(userEmail) {
    //     try {
    //         return await authModel
    //             .findOne({ email: userEmail })
    //             .sort({ createTime: -1 })
    //     } catch (e) {
    //         throw new Error('error ' + e)
    //     }
    // }

    // /**
    //  * 更新验证码有效期状态
    //  * @param {string} userEmail 用户邮箱
    //  * @param {boolean} isExpired 是否在有效期内
    //  * @returns {Promise<boolean>} 是否更新成功
    //  */
    // static async updateVarifyCodeExpired(email, isExpired) {
    //     try {
    //         await authModel
    //             .findOneAndUpdate({ email }, { $set: { isExpired } })
    //             .sort({ createTime: -1 })
    //         return true
    //     } catch (e) {
    //         throw new Error('error ' + e)
    //     }
    // }

    // /**
    //  * 更新最新用户的验证码和时间
    //  * @param {string} email 用户邮箱
    //  * @param {string} verificationCode 用户验证码
    //  */
    // static async updateVarifyCode(email, verificationCode) {
    //     try {
    //         await authModel
    //             .findOneAndUpdate(
    //                 {
    //                     email,
    //                 },
    //                 {
    //                     $set: {
    //                         verificationCode,
    //                         createTime: customMoment.formatNow(),
    //                     },
    //                 },
    //             )
    //             .sort({ createTime: -1 })
    //         return true
    //     } catch (e) {
    //         throw new Error('error ' + e)
    //     }
    // }
}

module.exports = RegisterService
