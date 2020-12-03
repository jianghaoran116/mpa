
const isFunction = variable => typeof variable === 'function';

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(handler) {
    this._state = PENDING;
    this._values = null;
    this.fulfilledQueues = [];
    this.rejectedQueues = [];

    if (isFunction(handler)) {
      handler(this._resolve.bind(this), this._reject.bind(this));
    }
  }

  _resolve(val) {
    const run = () => {
      
    }

    setTimeout(run, 0)
  }

  _reject(err) {
    const run = () => {

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

