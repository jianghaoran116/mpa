/* eslint-disable no-cond-assign */
/**
 * 止水版本
 */

const isFunction = variable => typeof variable === 'function';

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

export default class MyPromise {
  constructor(handle) {
    this._status = PENDING; // 当前状态
    this._value = undefined; //
    this._fulfilledQueues = []; //
    this._rejectedQueues = []; //

    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch(err) {
      this._reject(err);
    }
  }

  _resolve(val) {
    const run = () => {
      if (this._status !== PENDING) return;

      // 依次执行成功队列中的函数，并清空队列
      const runFulfilled = (value) => {
        let cb;
        while(cb = this._fulfilledQueues.shift()) {
          cb(value);
        }
      }

      // 依次执行失败队列中的函数，并清空队列
      const runRejected = (error) => {
        let cb;
        while(cb = this._rejectedQueues.shift()) {
          cb(error);
        }
      }

      if (val instanceof MyPromise) {
        val.then(value => {
          this._value = value;
          this._status = FULFILLED;
          runFulfilled(value);
        }, err => {
          this._value = err;
          this._status = REJECTED;
          runRejected(err);
        })
      } else {
        this._value = val;
        this._status = FULFILLED;
        runFulfilled(val);
      }
    }
    setTimeout(run, 0);
  }

  _reject(err) {
    const run = () => {
      this._value = err;
      this._status = REJECTED;
      let cb;
      while(cb = this._rejectedQueues.shift()) {
        cb(err);
      }
    }
    setTimeout(run, 0);
  }

  then(onFulfilled, onRejected) {
    const {
      _value,
      _status,
    } = this;
    // 返回一个新的promise对象
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 封装一个成功时执行的函数
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value);
          } else {
            let res = onFulfilled(value);
            if (res instanceof MyPromise) {
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              onFulfilledNext(res);
            }
          }
        } catch(err) {
          onRejectedNext(err);
        }
      }

      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error);
          } else {
            let res = onRejected(error);
            if (res instanceof MyPromise) {
              res.then(onFulfilledNext, onFulfilledNext);
            } else {
              onFulfilledNext(error);
            }
          }
        } catch(err) {
          onRejectedNext(err);
        }
      }

      switch(_status) {
        case PENDING:
          this._fulfilledQueues.push(fulfilled);
          this._rejectedQueues.push(rejected);
          break;
        case FULFILLED:
          fulfilled(_value);
          break;
        case REJECTED:
          rejected(_value);
          break;
      }

    })
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
      let values = [];
      let count = 0;

      for (let [i, p] of list.entries()) {
        this.resolve(p).then(res => {
          values[i] = res;
          count ++;
          if (count === list.length) resolve(values);
        }, err => {
          reject(err);
        })
      }
    })
  }

  static race(list) {
    return new MyPromise((resolve, reject) => {
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