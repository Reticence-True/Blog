/* 路由权限 */
import { router } from '@/routers'

router.beforeEach((to, _from, next) => {
  const token = document.cookie
    .split(';')
    .find((item) => item.trim().startsWith('auth_token='))
    ?.split('=')[1]

  // 白名单
  if (to.meta.whiteList) {
    next()
    return
  }

  // token 不存在或过期
  if (!token) {
    // 跳转到 登录页
    next('/login')
    return
  }

  // 有token但是要去登录页
  if (to.path === '/login') {
    // 返回首页
    next('/')
    return
  }

  // 其余情况放行
  next()
})
