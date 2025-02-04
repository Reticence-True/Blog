/** 用户仓库 */
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { routes } from '@/routers/routers.ts'
import type { UserInfo } from './type/user'

export const useUserStore = defineStore('User', () => {
    // state
    // 路由菜单
    const menuRoutes = ref(routes)
    // 用户数据
    const userInfo = reactive<UserInfo>({
        username: '',
        email: '',
        atatarUrl: '',
        password: '',
    })

    // getter
    // 清理密码
    const clearUserPassword = () => {
        userInfo.password = ''
    }
    // 清空用户数据
    const clearUserInfo = () => {
        Object.assign(userInfo, {
            username: '',
            email: '',
            atatarUrl: '',
            password: '',
        })
    }

    // action

    return {
        menuRoutes,
        userInfo,
        clearUserPassword,
        clearUserInfo,
    }
})
