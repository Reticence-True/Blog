/* 角色模型 */
const db = require('./db')

const roleSchema = db.Schema(
  {
    roleId: {
      type: String,
      require: true,
      unique: true,
    },
    roleName: {
      type: String,
      require: true,
    },
    permission: {
      type: String,
    },
  },
  { versionKey: false }, //隐藏_v字段
)

module.exports = db.model('role', roleSchema, 'role')
