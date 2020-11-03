# Promise规范解读  
promise A+规范  
promise是一个拥有then方法的对象或函数，其行为复合本规范  
- 具有then方法(thenable): 是一个定义了then方法的函数或对象  
- 值(value): 任何JS的合法值(undefined, thenable, promise)  
- 异常(exception): 使用throw抛出的一个值  
- 原因(reason): 表示一个promise的拒绝原因  

## promise的状态  

## promise的解决过程  

## promise构造函数上的静态方法  

## 捕获异常  

## "简易"的promise  


### node里的promisify  
``` javascript  
const fs = require('fs');
const readFileAsync = require('util.js').promisify();

readFileAsync('xxxx', 'utf-8')
  .then((result) => {
    console.log(result);
  });


// ...
const promisify = function(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      args.push(function(err, result) {
        if (err) reject(err);
        resolve(result)
      })
      func.apply(func, args);
    })
  }
}

```  

#### eg  
``` javascript  
let promise1 = new Promise((resolve, reject) => {
  reject();
});

promise1
  .then(null, function() {
    // return Promise.reject();
    return {
      x: 1
    }
  })
  .then(null, null)
  .then(null, null)
  .then(
    () => { console.log('promise2 resolve') },
    (e) => { console.log(e); console.log('promise2 reject') }
  );

// 
```  