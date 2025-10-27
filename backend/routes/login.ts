/* 登录路由 */
const express = require('express');
const LoginController = require('@controllers/loginController');

const router = express.Router();

// 登录接口
router.post('/', LoginController.login);
// 注销接口
router.delete('/', LoginController.logout);
// 找回密码接口
router.post('/forgot-password', LoginController.forgetPassword);
// 重置密码接口
router.post('/reset-password', LoginController.resetPassword);

module.exports = router;
