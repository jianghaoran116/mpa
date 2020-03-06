# 函数式的工具函数  
## memoized  
缓存函数执行的结果，提高执行效率
``` javascript  
function memoized (fn) {
  const lookupTable = {};

  return (args) => lookupTable[args] || (lookupTable[args] = fn(args));
}
```  
## carry  
柯里化函数  
``` javascript  
functin curry(fn) {
  if (typeof fn !== 'function') {
    throw new Error('No function provided');
  }

  return curriedFun(args) {
    if (args.length < fn.length) {
      return function() {
        return curriedFun.apply(null, args.concat([].slice.call(arguments)))
      }
    }

    return fn.apply(null, args);
  }
}
```  