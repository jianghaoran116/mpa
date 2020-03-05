/**
 * 
 * @param {any} value 
 */
export const tap = (value) => 
  (fn) => {
    typeof(fn) === 'function' && fn(value);
  }

export const forEach = (array, fn) => {
  for (let i = 0; i < array.length; i += 1) {
    fn(array[i]);
  }
}

export const forEachObject = (obj, fn) => {
  for (let prototype in obj) {
    if (Reflect.hasOwnProperty.call(obj, prototype)) {
      fn(prototype, obj[prototype]);
    }
  }
}

/**
 * 只能执行一次的函数
 * @param {function} fn 
 */
export const once = (fn) => {
  let done = false;

  return function () {
    return done
      ? undefined
      : ((done = true), fn.apply(this, arguments))
  }
}

/**
 * 缓存函数执行的结果
 * @param {function} fn 
 */
export const memoized = (fn) => {
  const lookupTable = {};
  
  return (args) => lookupTable[args] || (lookupTable[args] = fn(args))
}