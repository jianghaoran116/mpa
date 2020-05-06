import wine from '../../src/main';

const {
  // tap,
  // forEach,
  // forEachObject,
  // once,
  // memoized,
  map,
  filter,
  curryOnly2,
  curry,
  partial,
  compose,
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

// let match = curry(function(expr, str) {
//   return str.match(expr);
// })

// let hasNumber = match(/[0-9]+/);

// let filter = curry(function(f, ary) {
//   return ary.filter(f)
// })

// let findNumbersInArray = filter(hasNumber);

// console.log(findNumbersInArray(['123', 'asdfadsf', 'joge1', 'joge']))

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

/**
 * 入门compose
 */

const apressBooks = [
  {
      "id": 111,
      "title": "C# 6.0",
      "author": "ANDREW TROELSEN",
      "rating": [4.7],
      "reviews": [{good : 4 , excellent : 12}]
  },
  {
      "id": 222,
      "title": "Efficient Learning Machines",
      "author": "Rahul Khanna",
      "rating": [4.5],
      "reviews": []
  },
  {
      "id": 333,
      "title": "Pro AngularJS",
      "author": "Adam Freeman",
      "rating": [4.0],
      "reviews": []
  },
  {
      "id": 444,
      "title": "Pro ASP.NET",
      "author": "Adam Freeman",
      "rating": [4.2],
      "reviews": [{good : 14 , excellent : 12}]
  }
]

// 四舍五入一个字符串
const number = compose(Math.round, parseFloat);
console.log(number("3.46"))

// utils function
// const filterOutStandingBooks = (book) => book.rating[0] = 5;
const filterGoodBooks = (book) => book.rating[0] > 4.5;
// const filterBadBooks = (book) => book.rating[0] < 3.5;

const projectTitleAndAuthor = (book) => ({ title: book.title, author: book.author });
// let projectAuthor = (book) => ({ author:book.author });
// let projectTitle = (book) => ({ title: book.title });

const queryGoodBooks = partial(filter, undefined, filterGoodBooks);
const mapTitleAndAuthor = partial(map,undefined, projectTitleAndAuthor);

const titleAndAuthorForGoodBooks = compose(mapTitleAndAuthor, queryGoodBooks);
console.log(titleAndAuthorForGoodBooks(apressBooks));

function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(50000, 1) 
