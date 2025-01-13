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

/**
 * 字符串比较
 * @param {string} string 加密字符串
 * @param {string} hashString hash字符串
 * @returns 是否相等
 */
async function compareFunc(string, hashString) {
    return await bcryptjs.compare(string, hashString)
}

/**
 * 字符串加密为 base64
 * @param {string} string 加密字符串
 * @returns 加密的base64字符串
 */
function encryptionFuncBase64(string) {
    return Buffer.from(string).toString('base64')
}
/**
 * base64字符串解码
 * @param {string} string 字符串
 * @returns 解码的base64字符串
 */
function decryptionFuncBase64(string) {
    return Buffer.from(string, 'base64').toString()
}

module.exports = {
    encryptionFunc,
    compareFunc,
    encryptionFuncBase64,
    decryptionFuncBase64,
}
