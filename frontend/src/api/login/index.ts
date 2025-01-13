/* 登录API */
import request from '@/utils/request'
import { LoginResponseData, UserInfo } from './type'

enum API {
    // 登录/注销
    LOGIN_URL = '/login',
    // 忘记密码
    FORGOT_PASSWORD_URL = '/login/forgot-password',
    // 重置密码
    RESET_PASSWORD_URL = '/login/reset-password',
}

// 登录
export const reqLogin = (user: UserInfo) =>
    request.post<any, LoginResponseData>(API.LOGIN_URL, user)

// 忘记密码
export const reqForgotPassword = (email: string) =>
    request.post<any, LoginResponseData>(API.FORGOT_PASSWORD_URL, { email })

// 重置密码
export const reqResetPassword = (email: string, password: string) =>
    request.post<any, LoginResponseData>(API.RESET_PASSWORD_URL, {
        email,
        password,
    })
