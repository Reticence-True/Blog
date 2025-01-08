/* 角色服务层 */
const roleModel = require('@models/roleModel')
const initRolesInfo = [
  { roleId: 'roleAdminId', roleName: 'admin' },
  { roleId: 'roleCoadminId', roleName: 'co-admin' },
  { roleId: 'roleUserId', roleName: 'user' },
]

class RoleService {
  /**
   * 初始化角色信息
   */
  static async initRoles() {
    // 查找数据是否存在
    initRolesInfo.forEach(async (initRole) => {
      if(!(await RoleService.getRole(initRole.roleId))) {
        await roleModel.create(initRole)
      }
    })
    return 'ok'
  }

  static createRole() {}

  /**
   * 使用 roleId 或 roleName 获取角色信息
   * @param {string} role 角色id或角色名
   * @returns 查找到的角色信息
   */
  static async getRole(role) {
    try {
      const query = { $or: [{ _id: role }, { roleName: role }] }
      return await roleModel.findOne(query)
    } catch (e) {
      return {}
    }
  }
}

module.exports = RoleService