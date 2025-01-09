/* 登录控制层 */
// 加载环境变量
require('dotenv').config({
    path:
        process.env.NODE_ENV === 'production'
            ? '.env.production'
            : '.env.development',
})
const moment = require('moment')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const LoginService = require('@services/loginService')

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
}

module.exports = LoginController
