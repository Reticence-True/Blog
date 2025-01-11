/* 登录控制层 */
// 加载环境变量
require('dotenv').config({
    path:
        process.env.NODE_ENV === 'production'
            ? '.env.production'
            : '.env.development',
})
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const LoginService = require('@services/loginService')
const {sendForgetPasswordEmail} = require('@utils/sendEmail')
const stringEncryption = require('@utils/stringEncryption')

class LoginController {
    // token 有效期：1小时
    static #expiresIn = '1h'
    // cookie 有效期：10天
    static #cookieExpires = 10 * 24 * 60 * 60 * 1000

    /**
     * 用户登录
     * @param {import('express').Request} req 请求参数
     * @param {import('express').Response} res 响应参数
     */
    static async login(req, res) {
        const { username, password, rememberMe } = req.body
        // 查询数据库用户数据
        const dbUser = await LoginService.getUserByUsername(username)
        if (!dbUser) {
            return res.fail(400, '用户不存在')
        }
        // 检查密码是否正确
        if (await bcryptjs.compare(password, dbUser.password)) {
            // 生成token
            const token = jwt.sign({ ...dbUser }, process.env.SECRET_KEY, {
                expiresIn: LoginController.#expiresIn,
            })

            // 将token存储在cookie中
            res.cookie('auth_token', token, {
                httpOnly: true,
                sameSite: 'strict',
                // 如果设置 rememberMe，则设置具体的cookie过期时间，否则只是一次session
                ...(rememberMe && {
                    max_age: LoginController.#cookieExpires, // 10天后过期
                }),
            })
            res.success()
        } else {
            // 密码错误
            res.fail(400, '密码错误')
        }
    }

    /**
     * 注销登录
     * @param {import('express').Request} req 请求参数
     * @param {import('express').Response} res 响应参数
     */
    static async logout(_req, res) {
        res.clearCookie('auth_token')
        res.success()
    }

    // 找回密码
    static async forgetPassword(req, res) {
        const { email } = req.body
        const user = await LoginService.getUserByEmail(email)
        if (!user) {
            return res.fail(400, '用户不存在')
        }
        // 生成重置密码链接
        const findPasswordUrl = `${process.env.FRONTEND_URL}/reset-password`
        // 发送邮件
        await sendForgetPasswordEmail(email, findPasswordUrl)
        res.success()
    }

    // 重置密码
    static async resetPassword(req, res) {
        const { email, password } = req.body
        // 密码加密
        const hashPwd = await stringEncryption(password)
        // 更新密码
        try {
            await LoginService.updatePassword(email, hashPwd)
            res.success()
        } catch (e) {
            return res.fail(500, e.message)
        }
    }
}

module.exports = LoginController
