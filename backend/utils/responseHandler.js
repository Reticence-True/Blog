/* 响应控制器 */
class ResponseHandler {
    /**
     * 成功的响应控制器
     * @param {json | string | null} data 响应数据
     * @property {number} code - 状态码 200
     * @property {string} status - 状态说明 'ok'
     * @returns 响应数据对象
     */
    static success(data = null) {
        return {
            code: 200,
            status: 'ok',
            data,
        }
    }
    /**
     * 失败的响应控制器
     * @param {number} code - 状态码
     * @param {string | Array} message - 错误信息
     * @property {string} status - 状态说明 'error'
     * @returns 响应数据对象
     */
    static fail(code = 400, message = 'error') {
        return {
            code,
            status: 'error',
            message,
        }
    }
}

module.exports = ResponseHandler
