/** 路由定义 */
export const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/layout/index.vue')
    }
]