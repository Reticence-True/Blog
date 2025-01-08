/* 用户模型 */
const db = require('./db')

//定义结构
const userSchema = db.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            require: true,
            default: 'user',
        },
    },
    { versionKey: false }, //隐藏_v字段
)

//创建暴露模型
module.exports = db.model('user', userSchema, 'user')
