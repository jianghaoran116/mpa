/**
 * @file 订阅发布器
 * @author haoran
 */

/**
 * 二维数组 保存监听的数组
 */
class QueuePool {
  constructor() {
    this.pool = [];
  }

  get(namespace) {
    if (!this.pool[namespace]) {
      this.pool[namespace] = [];
    }
    return this.pool[namespace];
  }

  has(namespace) {
    return !!this.pool[namespace];
  }

  del(namespace, item) {
    if (!item) {
      this.pool[namespace] = []
    } else {
      this.pool[namespace] = this.pool[namespace]
        .filter(originItem => originItem !== item);
    }
  }

  pushto(namespace, item) {
    this.get(namespace).push(item)
  }
}

/**
 * observer类
 */
class Observer {
  constructor() {
    this.handlers = new QueuePool();
    this.messages = new QueuePool();
  }

  notify(namespace, message, options = {}) {
    this.handlers
      .get(namespace)
      .forEach((handler) => handler && handler(message));

    if (!options.once) {
      this.messages.pushto(namespace, message);
    }
    return this;
  }

  addSub(namespace, subHandler, options = {}) {
    if (Object.prototype.toString.call(namespace) === '[object Array]') {
      namespace.forEach((nameItem) => this.addSub(nameItem, subHandler, options));
      return this;
    }

    this.handlers.pushto(
      namespace,
      this.handlerProxy(namespace, subHandler, options = {})
    )

    if (options.detectPrevious && this.messages.has(namespace)) {
      const message = this.messages.get(namespace);
      this.handlerProxy(namespace, subHandler, options.once)(message);
    }

    return this;
  }

  removeSub(namspace, handler) {
    this.handlers.del(namspace, handler);
    return this;
  }

  handlerProxy(namespace, handler, once) {
    let proxyHandler = message => {
      if (once) {
        this.removeSub(namespace, proxyHandler);
      }
      return handler.call(this, message);
    };
    return proxyHandler;
  }

  static get() {
    if (!Observer.instance) {
      Observer.instance = new Observer();
    }
    return Observer.instance;
  }
}

export default Observer;
