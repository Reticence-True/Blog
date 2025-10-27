/* 验证中间件 */
// 加载环境变量
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies[auth_token];
  if (!token) {
    return res.fail(401, '未登录');
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    // 添加到 userToken 请求对象中
    req.userToken = decode;
    next();
  } catch (err) {
    return res.fail(401, 'token无效或过期');
  }
};

module.exports = authMiddleware;
