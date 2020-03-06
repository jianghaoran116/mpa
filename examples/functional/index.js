import wine from '../../src/main';

const {
  // tap,
  // forEach,
  // forEachObject,
  // once,
  memoized,
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

function add(a) {
  console.log('add');
  return a + 1;
}
let memoizedAdd = memoized(add);
let temp = memoizedAdd(1);
console.log(temp);
let temp2 = memoizedAdd(1);
console.log(temp2);
