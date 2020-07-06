/**
 * @file 零散点
 * @author haoran
 */

function tco(f) {
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);//每次将参数传入. 例如, 1 100000
    if (!active) {
      active = true;
      while (accumulated.length) {//出循环条件, 当最后一次返回一个数字而不是一个函数时, accmulated已经被shift(), 所以出循环
        value = f.apply(this, accumulated.shift());//调用累加函数, 传入每次更改后的参数, 并执行
      }
      active = false;
      return value;
    }
  };
}

const the100fac = tco(function(n, res) {
  if (n === 0) {
    return res
  }
  res = n * res
  return the100fac(n - 1, res)
});
console.log(the100fac(11396, 1));
