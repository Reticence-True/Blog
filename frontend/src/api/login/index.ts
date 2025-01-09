/* 登录API */
import request from '@/utils/request'
import { LoginResponseData, UserInfo } from './type'

enum API {
    LOGIN_URL = '/login',
}

export const reqLogin = (user: UserInfo) =>
    request.post<any, LoginResponseData>(API.LOGIN_URL, user)
