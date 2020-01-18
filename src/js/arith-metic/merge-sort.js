/**
 * @file 归并排序
 * @author haoran
 * @description 返回一个新数组 只能从小到大排序
 */

/**
 * 设置以什么规则排序
 * @param {number} prev 
 * @param {number} next 
 */
function judgeFun(prev, next) {
  return next - prev > 0;
}

 /**
  * 回溯的时候比较数组
  * @param {array} left 
  * @param {array} right 
  * @param {function} judge 
  */
function mergeArr(left, right, judge) {
  let res = [], il = 0, ir = 0;
  // 返回新的数组 每次比较两个数组 
  while (il < left.length && ir < right.length) {
    // if (left[il] < right[ir]) {
    if (judge(left[il], right[ir])) {
      res.push(left[il++]);
    } else {
      res.push(right[ir++]);
    }
  }
  while (il < left.length) {
    res.push(left[il++]);
  } 
  while (ir < right.length) {
    res.push(right[ir++]);
  }
  return res;
} 

/**
 * 递归拆分数组 直到左右至多有1个
 * @param {array} arr 
 */
function mergeSorcRec(arr, judge) {
  let length = arr.length;
  if (length === 1) {
    return arr;
  }
  let mid = length >> 1, leftArr, rightArr;
  leftArr = arr.slice(0, mid);
  rightArr = arr.slice(mid, length);

  return mergeArr(mergeSorcRec(leftArr, judge), mergeSorcRec(rightArr, judge), judge);
}

export default function mergeSort(arr, judge = judgeFun) {
  let resArr = mergeSorcRec(arr, judge);
  return resArr;
}