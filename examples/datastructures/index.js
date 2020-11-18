/**
 * @file 数据结构和算法
 * @author haoran
 */
import main from '../../src/main';

const { DS } = main;

const {
  // StackFromArray,
  // StackFromObj,
  // Queue,
  BinarySearchTree,
} = DS;

// let stackFromArray = new StackFromArray();
// let stackFromObj = new StackFromObj();

// console.log(stackFromArray);
// console.log(stackFromObj);

// let objectSymbols = Object.getOwnPropertySymbols(stackFromArray);
// console.log(objectSymbols);
// stackFromArray[objectSymbols[0]].push(1);
// console.log(stackFromArray.size());

// let queue = new Queue();
// console.log(queue);
// console.log(queue.isEmpty());
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(15);
tree.insert(5);

const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode);
console.log('-----------');
tree.preOrderTraverse(printNode);
console.log('-----------');
tree.postOrderTraverse(printNode);
console.log('-----------');
let minTest = tree.min();
console.log(minTest);
console.log('-----------');
let maxTest = tree.max();
console.log(maxTest);