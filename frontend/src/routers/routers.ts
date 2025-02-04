/** 路由定义 */
export const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            name: '登录',
            isVisible: false,
            status: 'login',
        },
    },
    {
        name: 'verification',
        path: '/email-verification',
        component: () => import('@/views/verification/index.vue'),
        meta: {
            name: '邮箱验证',
            isVisible: false,
            status: 'login',
        },
    },
    {
        name: 'forgetPassword',
        path: '/forget-password',
        component: () => import('@/views/forgetpassword/index.vue'),
        meta: {
            name: '忘记密码',
            isVisible: false,
            status: 'login',
        },
    },
    {
        name: 'resetPassword',
        path: '/reset-password',
        component: () => import('@/views/resetpassword/index.vue'),
        meta: {
            name: '重置密码',
            isVisible: false,
            status: 'login',
        },
    },
    {
        name: 'index',
        path: '/',
        component: () => import('@/layout/index.vue'),
        meta: {
            name: '主页',
            isVisiable: false,
        },
        redirect: '/home',
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    name: '主页',
                    isVisiable: true,
                    status: 'constant',
                },
            },
        ],
    },
    {
        name: 'indexBlog',
        path: '/',
        component: () => import('@/layout/index.vue'),
        meta: {
            name: '博客框架',
            isVisiable: false,
        },
        children: [
            {
                name: 'blog',
                path: '/blog',
                component: () => import('@/views/blog/index.vue'),
                meta: {
                    name: '帖子',
                    isVisiable: true,
                    status: 'constant',
                },
            },
        ],
    },
    {
        name: 'indexMessageBoard',
        path: '/',
        component: () => import('@/layout/index.vue'),
        meta: {
            name: '留言板框架',
            isVisiable: false,
        },
        children: [
            {
                name: 'messageboard',
                path: '/messageboard',
                component: () => import('@/views/messageboard/index.vue'),
                meta: {
                    name: '留言板',
                    isVisiable: true,
                    status: 'constant',
                },
            },
        ],
    },
    {
        name: 'indexFriends',
        path: '/',
        component: () => import('@/layout/index.vue'),
        meta: {
            name: '友链框架',
            isVisiable: false,
        },
        children: [
            {
                name: 'friends',
                path: '/friends',
                component: () => import('@/views/friends/index.vue'),
                meta: {
                    name: '友链',
                    isVisiable: true,
                    status: 'constant',
                },
            },
        ],
    },
    {
        name: 'indexAbout',
        path: '/',
        component: () => import('@/layout/index.vue'),
        meta: {
            name: '关于框架',
            isVisiable: false,
        },
        children: [
            {
                name: 'about',
                path: '/about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    name: '关于',
                    isVisiable: true,
                    status: 'constant',
                },
            },
        ],
    },
    {
        name: 'indexAdmin',
        path: '/',
        component: () => import('@/layout/index.vue'),
        meta: {
            name: '管理员框架',
            isVisiable: false,
        },
        children: [
            {
                name: 'admin',
                path: '/admin',
                component: () => import('@/views/admin/index.vue'),
                meta: {
                    name: '管理员',
                    isVisiable: true,
                    status: 'constant',
                },
            },
        ],
    },
    {
        name: '404',
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        meta: {
            name: '404',
            isVisiable: false,
            status: '404',
        },
    },
    {
        name: 'Any',
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        meta: {
            name: 'any',
            isVisiable: false,
            status: 'any',
        },
    },
]
