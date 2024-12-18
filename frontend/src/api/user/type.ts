/* USER_API 数据类型定义 */
// 登录数据
export interface LoginData {
    username: string,
    password: string
}
// 用户信息数据
interface UserData {
    token: string
}
// 登录用户信息数据
export interface LoginResponseData {
    code: string,
    data: UserData
}
// 用户明文数据
interface CheckUser {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}
export interface UserResponseData {
    code: number,
    data: CheckUser
}