// import '@/styles/variable.css'

/**
 * 获取scss变量
 * @param scssVariable scss变量
 * @returns scss变量值
 */
const getScssVariable = (scssVariable: string) => {
    const rootStyle = getComputedStyle(document.documentElement, null)
    // 将scss变量转换为css变量
    const cssVarivale =
        scssVariable.split('$').length > 1
            ? '--' + scssVariable.split('$')[1]
            : void 0

    return rootStyle.getPropertyValue(String(cssVarivale))
}

export default getScssVariable
