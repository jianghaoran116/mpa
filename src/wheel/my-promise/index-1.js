
const isFunction = variable => typeof variable === 'function';

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(handler) {
    this._state = PENDING;
    this._value = null;
    this._fulfilledQueues = [];
    this._rejectedQueues = [];

    handler(this._resolve.bind(this), this._reject.bind(this));
  }

  _resolve(val) {
    const run = () => {
      if (this.state !== PENDING) return;
    }

    setTimeout(run, 0)
  }

  _reject(err) {
    const run = () => {
      this._value = err;
      this._state = REJECTED;
      let cb;
      while(cb = this._rejectedQueues.shift()) {
        cb(err);
      }
    }

    setTimeout(run, 0)
  }

  then(onFulfilled, onRejected) {

  }

  catch() {

  }

  static resolve() {

  }

  static reject() {

  }

  static all() {

  }

  static race() {

  }
}

