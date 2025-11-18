/** 尺寸响应函数 */
export const w = (size: number) => {
  const style = getComputedStyle(document.documentElement);
  const standardWidth = style.getPropertyValue('--standard-viewport-width');

  const windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
  return `${(size / parseFloat(standardWidth)) * windowWidth}px`;
};

export const h = (size: number) => {
  const style = getComputedStyle(document.documentElement);
  const standardHeight = style.getPropertyValue('--standard-viewport-width');
  const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  return `${(size / parseFloat(standardHeight)) * windowHeight}px`;
};
