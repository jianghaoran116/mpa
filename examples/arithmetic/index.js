/**
 * @file 算法
 * @author haoran
 */
import main from '../../src/main';

const { liquors } = main;

const {
  mergeSort,
} = liquors;

console.log(mergeSort(
  [1,2,3,0,0,0],
  3,
  [2,5,6],
  3)
);