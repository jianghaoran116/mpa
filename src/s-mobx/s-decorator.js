import Observable from './s-observable';
import { createObservable } from './s-extendObservable';

/**
 * 包装 observable 属性
 * @param target
 * @param name
 * @param descriptor
 * @returns {{enumerable: boolean, configurable: boolean, get: get, set: set}}
 * @description 核心原理是Object.defineProperty(obj, prop, descriptor)
 * 有意思的是 descriptor 参数，它其实也是一个对象，其字段决定了 obj 的prop 属性的一些特性
 */
function observable(target, name, descriptor) {
  var v = descriptor.initializer.call(this);
  // 如果值是对象，为其值也创建observable
  if (typeof v === "object") {
    createObservable(v);
  }
  var observable = new Observable(v); // 相同的属性只会实例化一次 - 一个属性就会对应一个ID
  return {
    enumerable: true,
    configurable: true,
    get: function () {
      return observable.get();
    },
    set: function (v) {
      // 重新赋值对象的时候，为其值也创建observable
      if (typeof v === "object") {
        createObservable(v);
      }
      return observable.set(v);
    },
  };
}

export { observable };
