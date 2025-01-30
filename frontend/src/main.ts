import { createApp } from 'vue'
// element-plus
import ElementPlus from 'element-plus'
// @ts-expect-error elementplus i18n
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件
import 'virtual:svg-icons-register'
// pinia仓库
import { pinia } from '@/store'
// 全局组件注册
import globalComponent from '@/components/index.ts'
// 模板的全局样式
import '@/styles/index.scss'
// 替换 element-plus 样式
import '@/styles/element/index.ts'
// element-plus css
import 'element-plus/dist/index.css'
// 路由
import { router } from '@/routers/index.ts'
import './permission'
// app
import App from './App.vue'

const app = createApp(App)

// ElementPlus的i18n
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(globalComponent)
// 路由
app.use(router)
// pinia
app.use(pinia)

app.mount('#app')
