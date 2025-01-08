/* 密码加密函数 */
const bcryptjs = require('bcryptjs')

/**
 * 字符串加密
 * @param {string} string 加密字符串
 * @param {number} saltRound 加盐轮数，默认为 10
 * @returns 加密的hash字符串
 */
async function encryptionFunc(string, saltRound = 10) {
    // 加盐
    const salt = await bcryptjs.genSalt(saltRound)
    // hash
    const hashString = await bcryptjs.hash(string, salt)
    return hashString
}

module.exports = encryptionFunc
