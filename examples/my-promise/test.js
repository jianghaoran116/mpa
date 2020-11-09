const { resolve } = require("core-js/fn/promise");

const PENDING = 'PENDING';
const FULLFILED = 'FULLFILED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(handle) {
    this.status = PENDING;
    this.value = undefined;

    this._resolveQueues = [];
    this._rejectQueues = [];

    handle(this._resolve.bind(this), this._reject.bind(this));
  }

  _resolve() {

  }

  _reject() {

  }

  then(onFulfilled, onRejected) {

  }

  static catch() {

  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value));
  }

  static all(list) {
    return new MyPromise((resolve, reject) => {
      let value = [];
      let count = 0;

      for (let [i, p] of list.entries()) {
        this.resolve(p).then((res) => {
          value[i] = res;
          count++;
          if (count === list.length) resolve(value);
        })
      }

      // resolve(value);
    })
  }

  static race(list) {
    return new MyPromise((resovle, reject) => {
      for (let p of list) {
        this.resolve(p).then(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
      }
    })
  }
}


new MyPromise((resovle, reject) => {
  // ...
  resovle();
  // ...
  reject();
})