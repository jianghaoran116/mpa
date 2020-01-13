/**
 * @file 一个订阅发布器
 * @author haoran
 */

class Observer {
  constructor() {
  }

  notify() {

  }

  addSub() {

  }

  removeSub() {

  }

  static get() {
    if (!Observer.instance) {
      Observer.instance = new Observer();
    }
    return Observer.instance;
  }
}

export default Observer;
