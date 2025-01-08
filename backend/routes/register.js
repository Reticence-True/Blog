/* 注册路由 */
const express = require('express')
const RegisterController = require('@controllers/registerController')

const router = express.Router()

// 用户注册
router.post('/', RegisterController.register)
// 获取验证码
router.post('/get-varification-code', RegisterController.getVarificationCode)
// 邮箱验证
router.post('/email-varification', RegisterController.emailVarification)

module.exports = router
