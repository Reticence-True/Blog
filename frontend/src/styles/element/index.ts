/* 替换element-plus样式 */
import getScssVariable from '@/utils/getScssVariable'

const el = document.documentElement
// 设置 css 变量
el.style.setProperty('--el-color-primary', getScssVariable('$primary'))
el.style.setProperty(
    '--el-color-primary-light-3',
    getScssVariable('$primary-400'),
)
el.style.setProperty(
    '--el-color-primary-light-5',
    getScssVariable('$primary-300'),
)
el.style.setProperty(
    '--el-color-primary-light-7',
    getScssVariable('$primary-200'),
)
el.style.setProperty(
    '--el-color-primary-light-8',
    getScssVariable('$primary-100'),
)
el.style.setProperty(
    '--el-color-primary-light-9',
    getScssVariable('$primary-0'),
)
el.style.setProperty(
    '--el-color-primary-dark-2',
    getScssVariable('$primary-600'),
)
