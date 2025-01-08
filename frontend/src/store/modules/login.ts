/* 登录/注册的数据 */
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { LoginUser } from './type/login'

export const useLoginStore = defineStore('loginStore', () => {
    // states
    // 登录数据
    const loginUser = reactive<LoginUser>({
        username: '',
        password: '',
        email: '',
        verificationCode: '',
    })

    // getters
    // computed

    return { loginUser }
})
