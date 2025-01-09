/* 路由权限 */
import { router } from '@/routers'

router.beforeEach((to, from, next) => {
    // console.log(document.cookie)

    // const token = document.cookie
    //     .split(';')
    //     .find((item) => item.trim().startsWith('auth_token='))
    //     ?.split('=')[1]

    // const token = void 0

    // console.log('token', token, document.cookie)

    // // 白名单直接放行
    // if (to.meta.whiteList) {
    //     next()
    //     return
    // }

    // // 去 login
    // if (to.path === '/login') {
    //     // 带token
    //     if (token) {
    //         // 重定向到主页
    //         next({ path: '/' })
    //         return
    //     }
    //     // 不带token直接放行
    // }

    // 其余情况放行
    next()
})
