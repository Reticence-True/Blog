/** 路由入口文件 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routers.ts'

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
