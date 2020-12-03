/**
 * @file 算法
 * @author haoran
 */
import main from '../../src/main';

const { liquors } = main;

const {
  quickSort,
  mergeSort,
} = liquors;

// console.log(mergeSort(
//   [1,2,3,0,0,0],
//   3,
//   [2,5,6],
//   3)
// );

console.log("mergeSort:::", mergeSort([4,3,2,1]))
console.log("quickSort:::", quickSort([4,3,2,1]))