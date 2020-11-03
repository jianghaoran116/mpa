var main = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * @file 栈数据结构
   */
  var Stack = /*#__PURE__*/function () {
    function Stack() {
      _classCallCheck(this, Stack);

      this.item = [];
    } // 添加一个或多个元素到栈顶


    _createClass(Stack, [{
      key: "push",
      value: function push() {} // 移除栈顶元素

    }, {
      key: "pop",
      value: function pop() {}
    }]);

    return Stack;
  }();

  var da = {
    Stack: Stack
  };

  function MyPromise() {}

  // import rum from './design-patterns';
  var main = {
    da: da,
    MyPromise: MyPromise
  };

  return main;

}());
//# sourceMappingURL=main.js.map
