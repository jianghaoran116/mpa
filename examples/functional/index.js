import wine from '../../src/main';

const {
  // tap,
  // forEach,
  // forEachObject,
  // once,
  // memoized,
  curryOnly2,
  curry,
} = wine;

// [1, 2, 3].forEach((item) => {
//   tap(item)(() => {
//     console.log(item);
//   })
// })

// forEach([1, 2, 3, 4], (item) => {
//   console.log(item);
// })

// forEachObject({a: 1}, (prototype, value) => {
//   console.log(prototype, value);
// })

// function click() {
//   console.log('click');
// }
// const onceClick = once(click);
// onceClick();
// onceClick();
// onceClick();

// function add(a) {
//   console.log('add');
//   return a + 1;
// }
// let memoizedAdd = memoized(add);
// let temp = memoizedAdd(1);
// console.log(temp);
// let temp2 = memoizedAdd(1);
// console.log(temp2);

function addCurry(a, b) {
  return a + b;
}

let tempAddCurry = addCurry(1, 1);
console.log(tempAddCurry);

let curryAddCurry = curryOnly2(addCurry);
let tempAddCurry2 = curryAddCurry(1)(2);
console.log(tempAddCurry2);

let curryNaddCurry = curry(addCurry);
console.log(curryNaddCurry(1)(2));
console.log(curryNaddCurry(2)(3));

/**
 * 柯里化函数实现找出数组里包含数字的项
 */

let match = curry(function(expr, str) {
  return str.match(expr);
})

let hasNumber = match(/[0-9]+/);

let filter = curry(function(f, ary) {
  return ary.filter(f)
})

let findNumbersInArray = filter(hasNumber);

console.log(findNumbersInArray(['123', 'asdfadsf', 'joge1', 'joge']))

// let match = carry(function(expr, str) {
//   return str.match(expr);
// })

// console.log(match);
// let hasNumber = match(/[0-9]+/);
// console.log(hasNumber);

// let filter = carry(function(f, ary) {
//   return ary.filter(f);
// });

// let findNumbersInArray = filter(hasNumber)
// console.log(findNumbersInArray(['123', 'asdfadsf', 'joge1', 'joge']))