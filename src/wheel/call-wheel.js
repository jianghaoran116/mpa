/**
 * @file 模拟实现call
 * @author haoran
 */

export function callWheel() {
  Function.prototype.callWheel = function(context) {
    context = context || window; // 如果传null|undefined设置为window
    context.fn = this;
    var args = [];
    for (var i = 1; i < arguments.length; i += 1 ) {
      args.push(arguments[i]);
    }
    var res = eval('context.fn(' + args + ')');
    delete context.fn;
    return res;
  }
}