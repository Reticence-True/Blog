/* 用户信息路由 */
const express = require('express')
const UserController = require('@controllers/userController')

const router = express.Router()

router.get('/get-user', UserController.getUserByToken)

module.exports = router