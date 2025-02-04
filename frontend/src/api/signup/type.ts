/* 注册API类型 */
// 全局响应数据
export interface ResponseData {
    code: number
    status: string
}

// 用户数据
export interface UserInfo {
    username: string
    password?: string
    email?: string
}

// 注册响应数据
export interface SignupResponseData extends ResponseData {
    data: null
}

// 存在性检查响应数据
export interface ExistsResponseData extends ResponseData {
    data?: {
        exists: boolean
    }
    message?: string
}
