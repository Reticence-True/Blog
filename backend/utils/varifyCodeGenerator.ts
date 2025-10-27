/* 校验码生成 */
const crypto = require('crypto');

// 生成验证码
function generateVerificationCode() {
  return crypto.randomBytes(3).toString('hex').toUpperCase(); // 生成6位字母全大写验证码
}

module.exports = generateVerificationCode;
