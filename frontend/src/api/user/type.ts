/* 用户接口数据类型 */
export interface ResponseData {
    code: number
    status: string
}

// 用户信息
export interface UserInfo {
    username: string
    email: string
    avatarUrl?: string
}

// 获取用户信息接口
export interface GetUserInfoResponseData extends ResponseData {
    data: UserInfo
    message?: string
}
