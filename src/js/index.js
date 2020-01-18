import curlyhairWheel from './main';

const { 
  mergeSort, // 归并排序  
} = curlyhairWheel;

let arr = [1,3,4,56,6,7,8,10];
// let arr2 = mergeSort(arr);
let arr2 = mergeSort(arr, (a, b) => a - b > 0);
console.log(arr2);
console.log(arr);