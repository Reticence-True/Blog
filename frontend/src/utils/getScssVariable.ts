import '@/styles/variable.css'

/** 获取scss变量 */
const getScssVariable = (scssVariable: string) => {
    const rootStyle = getComputedStyle(document.documentElement, null)
    // 将scss变量转换为css变量
    const cssVarivale = scssVariable.split('$').length
        ? '--' + scssVariable.split('$')[1]
        : void 0
    // css变量不存在
    if (!cssVarivale) return void 0
    console.log(cssVarivale, rootStyle.getPropertyValue(cssVarivale))
}

export default getScssVariable
