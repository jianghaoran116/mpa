/**
 * @file 队列
 */

export class Queue {
  constructor() {
    this.count = 0; // 队列长度
    this.lowestCount = 0; // 第一个元素
    this.items = {};
  }

  // 向队列尾部添加一个（或多个）新的项
  enqueue = (element) => {
    this.items[this.count] = element;
    this.count++;
  }

  // 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
  dequeue = () => {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素
  // 队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）
  // 该方法在其他语言中也可以叫作front方法
  peek = () => {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  isEmpty = () => {
    return this.count - this.lowestCount === 0;
  }

  size = () => {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }

}

export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
}
