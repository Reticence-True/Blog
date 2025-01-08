/* 角色控制层 */
const RoleService = require('@services/roleService')

class RoleController {
    /**
     * 初始化角色信息
     */
    static initRoles() {
        RoleService.initRoles()
    }
}


module.exports = RoleController