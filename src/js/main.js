import { Observer } from './design-patterns';

/**
 * 假装是个文件模块
 */
const registerLog = (observer) => {
  const sendLog = (params) => {
    console.log('log!', params);
  }

  observer
    .addSub('add', (param) => {
      sendLog({...param});
    })
}

/**
 * 假装是个文件模块
 */
const tabAction = (observer) => {
  // 发布，告诉所有订阅者，add事件发生了！
  observer.notify('add', {
    sum: 5
  });
}

const start = () => {
  const observer = Observer.get();

  // 打印日志
  registerLog(observer)

  // 用户点击
  tabAction(observer);
}

start();
