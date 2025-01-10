/* 登录/注册的数据 */
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { LoginUser } from './type/login'

export const useLoginStore = defineStore('loginStore', () => {
    // states
    // 登录数据
    const loginUser = reactive<LoginUser>({
        username: '',
        password: '',
        email: '',
    })
    // 按钮禁用
    const btnsDisabled = ref<boolean>(false)

    // getters
    // 修改按钮禁用状态
    function setBtnsDisabled(status: boolean) {
        btnsDisabled.value = status
    }

    // computed

    return { loginUser, setBtnsDisabled, btnsDisabled }
})
