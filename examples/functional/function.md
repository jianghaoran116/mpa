# 函数式的工具函数  
## memoized  
缓存函数执行的结果，提高执行效率
``` javascript  
function memoized (fn) {
  const lookupTable = {};

  return (args) => lookupTable[args] || (lookupTable[args] = fn(args));
}
```  