/** 用户信息API */
import request from '@/utils/request.ts'
import type { LoginData, LoginResponseData, UserResponseData } from './type';

enum API {
    LOGIN_URL = 'user/login',
    USERINFO_URL = 'user/info'
}

export const reqLogin = (data: LoginData) => request.post<any, LoginResponseData>(API.LOGIN_URL, data); // 登录
export const reqUserData = () => request.get<any, UserResponseData>(API.USERINFO_URL); // 获取信息