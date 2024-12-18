// 注册全局组件
// element-plus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 自定义icon
import SvgIcon from "./SvgIcon/index.vue"
import type { ComponentObject } from "./types/types"

const allGlobalComponents: ComponentObject = {
    SvgIcon
}

export default {
    install(app: any) {
        // element-plus icon 注册
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
        // 遍历注册全局组件对象中的所有组件
        Object.keys(allGlobalComponents).forEach((componentName) => {
            app.component(componentName, allGlobalComponents[componentName]);
        })
    }
}