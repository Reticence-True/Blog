/* 响应控制器 */
class ResponseHandler {
  /**
   * 成功的响应控制器
   * @param data 响应数据
   * @property code - 状态码 200
   * @property status - 状态说明 'ok'
   * @returns 响应数据对象
   */
  static success(data: JSON | string | null = null) {
    return {
      code: 200,
      status: 'ok',
      data,
    };
  }
  /**
   * 失败的响应控制器
   * @param  code - 状态码
   * @param  message - 错误信息
   * @property status - 状态说明 'error'
   * @returns 响应数据对象
   */
  static fail(code = 400, message: string | [] = 'error') {
    return {
      code,
      status: 'error',
      message,
    };
  }
}

module.exports = ResponseHandler;
