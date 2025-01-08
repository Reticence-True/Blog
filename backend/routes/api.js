/* API中间件 */
const express = require('express')
const cors = require('cors')

const router = express.Router()
// 路由
const registerRouter = require('./register')
const loginRouter = require('./login')
const roleRouter = require('./role')

// 配置跨域
const corsOptions = {
  // 配置 Access-Control-Allow-Origin CORS 标头
  origin: true,
  // 成功状态代码
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// 使用路由
router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/role', roleRouter)

module.exports = router
