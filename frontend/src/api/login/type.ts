/* 登录API数据类型 */
export interface ResponseData {
    code: number
    status: string
}

// 用户数据
export interface UserInfo {
    username: string
    password: string
    rememberMe: boolean
}

// 登录请求返回数据
export interface LoginResponseData extends ResponseData {
    data: null
}
