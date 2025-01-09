const ResponseHandler = require('@utils/responseHandler')

/* 响应控制器中间件 */
const responseMiddleware = function (_, res, next) {
    /**
     * 发送成功响应
     * @param {*} [data=null] - 响应数据
     * @returns {import('express').Response} Express 响应对象
     * @example
     * res.success({ user: 'john' }, '获取用户信息成功')
     * // 返回: { code: 200, status: 'ok', message: '获取用户信息成功', data: { user: 'john' } }
     */
    res.success = function (data = null) {
        return res.status(200).json(ResponseHandler.success(data))
    }
    /**
     * 发送错误响应
     * @param {number} [code=400] - HTTP状态码
     * @param {string | Array} [message='error'] - 错误信息
     * @returns {import('express').Response} Express 响应对象
     * @example
     * res.error(401, '未授权访问')
     * // 返回: { code: 401, status: 'error', message: '未授权访问', data: null }
     */
    res.fail = function (code = 400, message = 'error') {
        return res.status(200).json(ResponseHandler.fail(code, message))
    }

    next()
}

module.exports = responseMiddleware
