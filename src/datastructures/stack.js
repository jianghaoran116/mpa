/**
 * @file 栈 - 基于数组
 */

 /**
  * 适用数据量不大的情况 或者修改少的时候
  */

const _stackArrayItems = Symbol('stackArrayItems');

export class StackFromArray {
  constructor() {
    this[_stackArrayItems] = [];
  }

  // 添加一个（或几个）新元素到栈顶
  push = (element) => {
    this[_stackArrayItems].push(element);
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop = () => {
    return this[_stackArrayItems].pop();
  }

  // 返回栈顶的元素，不对栈做任何修改
  peek = () => {
    return this[_stackArrayItems][this.items.length - 1]
  }

  // 如果栈里没有任何元素就返回true，否则返回false
  isEmpty = () => {
    // if (this.items.length === 0) return true;
    // return false;
    return this[_stackArrayItems].length === 0;
  }

  // 移除栈里的所有元素
  clear = () => {
    this[_stackArrayItems] = [];
  }

  // 返回栈里的元素个数。该方法和数组的length属性很类似
  size = () => {
    return this[_stackArrayItems].length;
  }
}

 /**
  * 适用数据量大 或者修改多的时候
  */
// const stackObjItems = new WeakMap();

export class StackFromObj {
  constructor() {
  }

  #count = 0;
  #items = {};

  // 添加一个（或几个）新元素到栈顶
  push = (element) => {
    this.#items[this.#count] = element;
    this.#count++;
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop = () => {
    if (this.isEmpty()) {
      return undefined;
    }

    this.#count--;
    const result = this.#items[this.#count];
    delete this.#items[this.#count];
    return result;
  }

  // 返回栈顶的元素，不对栈做任何修改
  peek = () => {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items[this.#count - 1];
  }

  // 如果栈里没有任何元素就返回true，否则返回false
  isEmpty = () => {
    return this.#count === 0;
  }

  // 移除栈里的所有元素
  clear = () => {
    this.#items = {};
    this.#count = 0;
  }

  // 返回栈里的元素个数。该方法和数组的length属性很类似
  size = () => {
    return this.#count;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.#items[0]}`;
    for (let i = 1; i < this.#count; i++) {
      objString = `${objString},${this.#items[i]}`;
    }
    return objString;
  }
}
