import request from '@/utils/request'
import { GetUserInfoResponseData } from './type'

/* 用户接口 */
enum API {
    // 获取用户信息
    GET_USER_URL = '/user/get-user',
}

// 获取用户信息
export const reqGetUserInfo = () =>
    request.get<any, GetUserInfoResponseData>(API.GET_USER_URL)
