/* 路由权限 */
import { router } from '@/routers'
import { pinia } from './store'
import { useLoginStore } from './store/modules/login'

const loginStore = useLoginStore(pinia)

router.beforeEach((to, _from, next) => {
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
    // 其余情况放行
    next()
})
