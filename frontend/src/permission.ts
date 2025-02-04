/* 路由权限 */
import { router } from '@/routers'
import { pinia } from './store'
import { cloneDeep } from 'lodash'
import { useLoginStore } from './store/modules/login'
import { useUserStore } from './store/modules/user'
import { reqGetUserInfo } from './api/user'
import { ElNotification } from 'element-plus'

const loginStore = useLoginStore(pinia)
const userStore = useUserStore(pinia)

router.beforeEach(async (to, _from, next) => {
    const forgotPasswordFlag = loginStore.forgotPasswordFlag
    // 忘记密码页面逻辑
    // 如果要是切换到其他页面，重置忘记密码标志
    if (forgotPasswordFlag && to.path !== '/forget-password') {
        loginStore.setForgotPasswordFlag(false)
    }
    // 如果直接访问忘记密码页面，重定向到登录页
    if (!forgotPasswordFlag && to.path === '/forget-password') {
        return next('/login')
    }

    // 获取用户信息
    if (to.meta.status === 'constant' && !userStore.userInfo.username.trim()) {
        // 获取用户信息
        const userResult = await reqGetUserInfo()
        switch (userResult.code) {
            // 存储用户信息
            case 200:
                Object.assign(userStore.userInfo, cloneDeep(userResult.data))
                break
            // token过期
            case 401:
                ElNotification.info(userResult.message)
                next('/login')
                return
            // token错误
            case 402:
                ElNotification.info(userResult.message)
                next('/login')
                return
        }
    }
    // 禁止登录用户进入登录相关页面
    if (to.meta.status === 'login' && userStore.userInfo.username.trim()) {
        next('/')
        return
    }

    // 其余情况放行
    next()
})
