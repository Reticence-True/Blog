/* 邮箱验证模型 */
const db = require('./db');

const authSchema = db.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    createTime: {
      type: Date,
    },
    isExpired: {
      type: Boolean,
      default: true,
    },
    verificationCode: {
      type: String,
    },
  },
  { versionKey: false }, // 隐藏_v字段
);

module.exports = db.model('auth', authSchema, 'auth');
