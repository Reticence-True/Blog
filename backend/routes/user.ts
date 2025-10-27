/* 用户信息路由 */
const express = require('express');
const UserController = require('@controllers/userController');

const router = express.Router();

// 根据 token 获取用户信息
router.get('/get-user', UserController.getUserByToken);
// 获取在线用户人数
// router.get('/get-online-user-num', UserController.getOnlineUserNum);

module.exports = router;
