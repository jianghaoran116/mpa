/**
 * @file 截流
 * @author haoran
 */

export function createThrottle(fn, delay) {
  let previous = 0; // 标记位 如果大于0 则执行函数
  return function throttle(...args) {
    let now = + new Date();
    const context = this;
    // console.log(fn);
    if (now - previous > delay) {
      previous = now;
      fn && fn.apply(context, args);
    }
  }
}