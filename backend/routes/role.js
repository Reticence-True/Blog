/* 角色路由 */
const express = require('express')
const RoleController = require('@controllers/roleController')

const router = express.Router()

/**
 * 初始化角色信息
 */
function initRoles() {
    RoleController.initRoles()
}

// 角色信息初始化
initRoles()

module.exports = router