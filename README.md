## 包含一个订阅发布器  
以react为例
引入:  
```javascript
import rum from 'curlyhair-wheel';
const { Observer } = rum;
```  
使用:  
```javascript
  const start = () => {
    const observer = Observer.get();

    // 监听并且发送日志
    this.registerLog(observer);

    // 假装触发了一次点击
    this.tabAction(observer);
  };

  start();
```  
写自己的事件:  
```javascript
  registerLog = (observer) => {
    const sendLog = (params) => {
      console.log('log!', params);
    };
    // 监听，当add事件发生的时候，去打印日日志
    observer
      .addSub('add', (params) => {
        // 主要的逻辑门
        sendLog({ ...params });
      });
  };

  tabAction = (observer) => {
    // 发布，告诉所有订阅者，add事件发生了！
    observer.notify('add', {
      sum: 5,
    });
  };
```  

## 包含一些算法
``` javascript  
import curlyhairWheel from './main';

const { 
  mergeSort, // 归并排序 返回一个新数组对象 默认升序  
} = curlyhairWheel;

let arr = [1,3,4,56,6,7,8,10];
// let arr2 = mergeSort(arr);
let arr2 = mergeSort(arr, (prev, next) => prev - next > 0);

```  