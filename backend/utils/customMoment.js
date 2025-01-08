/* 二次封装moment函数 */
const moment = require('moment')

const customMoment = {
    /**
     * 结构化当前日期
     * @param {string} format 结构化字符串
     * @returns 结构化日期
     */
    formatNow(format = 'yyyy-MM-DD HH:mm:ss') {
        return moment().format(format)
    }
}

module.exports = customMoment