/**
 * @file 防抖函数
 * @author haoran
 */

// export function createDebounce (fn, delay) {
//   let timeout = null;
//   return function debounce(...args) {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       fn && fn.apply(context, args);
//     }, delay)
//   }
// }

export function createDebounce(fn, delay) {
  let timeout = null;
  return function debounce(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn && fn.apply(context, args);
    }, delay);
  }
}