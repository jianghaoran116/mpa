let nowObserver = null;
let nowTarget = null;
let observerStack = [];
let targetStack = [];
// eslint-disable-next-line no-unused-vars
let isCollecting = false;

const dependenceManager = {
  /**
   * 存储所有observable和handler的映射关系
   */
  _store: {},

  /**
   * 填一个当前栈中的依赖到 store 中
   */
  _addNowObserver(obID) {
    this._store[obID] = this._store[obID] || {};
    this._store[obID].target = nowTarget;
    this._store[obID].watchers = this._store[obID].watchers || [];
    this._store[obID].watchers.push(nowObserver);
    console.log(`${obID}-wathers:::`, this._store[obID].watchers);
  },

  /**
   * 收集依赖
   */
  collect(obID) {
    if (nowObserver) {
      this._addNowObserver(obID);
    }
    return false;
  },

  /**
   * 触发依赖
   * @param {*} obId
   */
  trigger(id) {
    let ds = this._store[id];
    if (ds && ds.watchers) {
      ds.watchers.forEach((d) => {
        d.call(ds.target || this);
      });
    }
  },

  /**
   * 开始收集依赖
   * @param observer
   * @param target
   */
  beginCollect(observer, target) {
    isCollecting = true;
    observerStack.push(observer);
    targetStack.push(target);
    nowObserver = observerStack.length > 0 ? observerStack[observerStack.length - 1] : null;
    nowTarget = targetStack.length > 0 ? targetStack[targetStack.length - 1] : null;
    console.log("begin store:::", this._store);
    console.log("begin nowObserver", nowObserver);
  },

  endCollect() {
    isCollecting = false;
    observerStack.pop();
    targetStack.pop();
    nowObserver = observerStack.length > 0 ? observerStack[observerStack.length - 1] : null;
    nowTarget = targetStack.length > 0 ? targetStack[targetStack.length - 1] : null;
    console.log("end store:::", this._store);
    console.log("end nowObserver", nowObserver);
  },
};

export default dependenceManager;
