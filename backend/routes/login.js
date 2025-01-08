/* 登录路由 */
const express = require('express')
const LoginController = require('@controllers/loginController')

const router = express.Router()

// 登录接口
router.post('/', LoginController.login)

module.exports = router