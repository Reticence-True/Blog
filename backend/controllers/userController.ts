/* 用户信息控制层 */
// 加载环境变量
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});

const jwt = require('jsonwebtoken');
const LoginService = require('@services/loginService');

class UserController {
  /**
   * 获取用户信息
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getUserByToken(req, res) {
    const token = req.cookies.auth_token;
    if (token) {
      try {
        const { username } = jwt.verify(token, process.env.SECRET_KEY)._doc;
        // 获取用户信息
        const user = await LoginService.getUserByUsername(username);
        if (!user) {
          return res.fail(400, '用户不存在');
        }
        res.success({ username: user.username, email: user.email });
      } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
          return res.fail(401, 'token过期');
        } else if (e instanceof jwt.JsonWebTokenError) {
          return res.fail(402, 'token错误');
        }
      }
    } else {
      // token 不存在
      return res.fail(400, '未登录');
    }
  }
}

module.exports = UserController;
