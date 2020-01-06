import { bubbleSort } from './arith-metic';

const arr = [2,4,5,1,5,6,7,89,9,10] 
const resArr = bubbleSort(arr);
// const resArr = bubbleSort(arr, (prev, next) => prev - next > 0);
console.log(arr);
console.log(resArr);