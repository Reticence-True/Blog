/* 登录/注册的数据 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('loginStore', () => {
    // states
    // 按钮禁用
    const btnsDisabled = ref<boolean>(false)
    // 忘记密码标志：用于路由拦截，判断是为点击 ‘忘记密码’ 按钮时访问的页面
    const forgotPasswordFlag = ref<boolean>(false)

    // getters
    // 修改按钮禁用状态
    function setBtnsDisabled(status: boolean) {
        btnsDisabled.value = status
    }

    // 设置忘记密码标志
    function setForgotPasswordFlag(status: boolean) {
        forgotPasswordFlag.value = status
    }

    // computed

    return {
        btnsDisabled,
        setBtnsDisabled,
        forgotPasswordFlag,
        setForgotPasswordFlag,
    }
})
