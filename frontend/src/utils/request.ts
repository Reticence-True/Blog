/** 二次封装 axios */
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { de } from 'element-plus/es/locales.mjs';

// 创建 axios 实例，用于配置其他项
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 1000
})

// 请求拦截器
request.interceptors.request.use((config) => {
    // config配置对象，包括hearders属性请求头，经常给服务端携带公共参数
    // 返回配置对象
    return config;
})

// 相应拦截器
request.interceptors.response.use((response) => {
    // 成功的回调
    // 简化数据
    return response.data
}, (error) => {
    // 失败的回调
    let message = ''
    let statusCode = error.response.status

    switch (statusCode) {
        case 401:
            message = 'token过期'
            break
        case 403:
            message = '无权访问'
            break
        case 404:
            message = '请求地址错误'
            break
        case 500:
            message = '服务器错误'
            break
        case 503:
            message = '服务器未响应'
            break
        default:
            message = '网络连接错误'
    }
    // 提示错误信息
    ElMessage({
        type: error,
        message
    })
    return Promise.reject(error)
})

export default request