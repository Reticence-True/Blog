/**
 * 获取css变量
 * @param cssVariable css变量
 * @returns css变量值
 */
const getCssVariable = (cssVariable: string) => {
  const rootStyle = getComputedStyle(document.documentElement, null);
  return rootStyle.getPropertyValue(String(cssVariable));
};

export default getCssVariable;
