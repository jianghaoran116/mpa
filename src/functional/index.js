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

export const curryOnly2 = (fn) => (firstArg) => (secondArg) => fn(firstArg, secondArg)

/**
 * 柯里化函数
 * @param {function} fn
*/
export const curry = (fn) => {
  if (typeof fn !== 'function') {
    throw new Error('shoulde be a function');
  }

  return function curriedFun(...args) {
    if (args.length < fn.length) {
      return function() {
        return curriedFun.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    
    return fn.apply(null, args)
  }
};

export const partial = (fn,...partialArgs) => {
  let args = partialArgs.slice(0);
  return function(...fullArguments) {
    let arg = 0;
    for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArguments[arg++];
        }
      }
      return fn.apply(this, args);
  };
};
