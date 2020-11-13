/**
 * @file 数据结构和算法
 * @author haoran
 */
import main from '../../src/main';

const { DS } = main;

const { StackFromArray, StackFromObj } = DS;


let stackFromArray = new StackFromArray();
let stackFromObj = new StackFromObj();

console.log(stackFromArray);
console.log(stackFromObj);

let objectSymbols = Object.getOwnPropertySymbols(stackFromArray);
console.log(objectSymbols);
stackFromArray[objectSymbols[0]].push(1);
console.log(stackFromArray.size());
