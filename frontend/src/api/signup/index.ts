/* 注册API */
import request from '@/utils/request'
import { ExistsResponseData, SignupResponseData, UserInfo } from './type'

enum API {
    // 用户注册
    SIGNUP_URL = '/register',
    // 获取验证码
    GET_VERIFICATION_CODE_URL = '/register/get-varification-code',
    // 验证身份
    VERIFY_AUTH_URL = '/register/email-varification',
    // 检查用户是否存在
    CHECK_EXISTS_BY_USERNAME = '/register/check-exists-by-username', // 通过用户名
    CHECK_EXISTS_BY_EMAIL = '/register/check-exists-by-email', // 通过邮箱
}

// 用户注册
export const reqSignUp = (user: UserInfo) =>
    request.post<any, SignupResponseData>(API.SIGNUP_URL, user)
// 获取验证码
export const reqGetVerificationCode = (email: string) =>
    request.post<any, SignupResponseData>(API.GET_VERIFICATION_CODE_URL, email)
// 验证身份
export const reqVerifyAuth = (email: string, varificationCode: string) =>
    request.post<any, SignupResponseData>(API.VERIFY_AUTH_URL, {
        email,
        varificationCode,
    })
// 检擦用户是否存在
// 检查用户名
export const reqCheckExistsByUsername = (username: string) =>
    request.post<any, ExistsResponseData>(API.CHECK_EXISTS_BY_USERNAME, {
        username,
    })
// 检查邮箱
export const reqCheckExistsByEmail = (email: string) =>
    request.post<any, ExistsResponseData>(API.CHECK_EXISTS_BY_EMAIL, {
        email,
    })
