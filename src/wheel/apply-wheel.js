/**
 * @file 模拟实现apply
 * @author haoran
 */

export function applyWheel() {
  Function.prototype.applyWheel = function(context, arr) {
    context = context || window;
    context.fn = this;
    var res;
    
    if (!arr) {
      res = context.fn()
    } else {
      var args = [];
      for (var i = 0, len = arr.length; i < len; i += 1) {
          args.push('arr[' + i + ']');
      }
      res = eval('context.fn(' + args + ')')
    }

    delete context.fn;
    return res;
  }
}