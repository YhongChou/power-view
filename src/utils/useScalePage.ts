import _ from 'lodash';

export type ScreenOption = {
  screenWidth?: number;
  screenHeight?: number;
  targetRatio?: number;
};

export function scalePage(option?: ScreenOption) {
  const resize = _.throttle(triggerScalePage, 100);

  function on() {
    // 为window对象添加一个事件监听器，监听resize事件
    window.addEventListener('resize', resize);
  }

  function off() {
    window.removeEventListener('resize', resize);
  }

  function triggerScalePage() {
    const targetWidth = option?.screenWidth || 1920;
    const targetHeight = option?.screenHeight || 1080;
    const targetRatio = option?.targetRatio || 16 / 9;

    const screenWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    // 以宽度为准，设置缩放比率
    let ratio = screenWidth / targetWidth; // 默认比例，以宽度为准
    const screenRatio = screenWidth / screenHeight; // 实际屏幕比例

    if (screenRatio > targetRatio) {
      // 超宽屏，以高度为准进行拉伸，并水平居中
      ratio = screenHeight / targetHeight;
      document.body.style = `width:${targetWidth}px;height: ${targetHeight}px; transform: scale(${ratio}) translate(-50%);left: 50%;position: relative;`;
    } else {
      // 设置缩放比例
      document.body.style = `width:${targetWidth}px;height: ${targetHeight}px; transform: scale(${ratio})`;
    }
  }

  return {
    on,
    off,
  };
}
