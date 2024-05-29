/** 路由定义 */
export const routes = [
    {
        name: 'index',
        path: '/',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    {
        name: 'blog',
        path: '/blog',
        component: () => import('@/views/blog/index.vue')
    },
    {
        name: 'friends',
        path: '/friends',
        component: () => import('@/views/friends/index.vue')
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('@/views/about/index.vue')
    },
    {
        name: '404',
        path: '/404',
        component: () => import('@/views/404/index.vue')
    },
    {
        name: 'Any',
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]