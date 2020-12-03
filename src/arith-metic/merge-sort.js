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
// function judgeFun(prev, next) {
//   return next - prev > 0;
// }

//  /**
//   * 回溯的时候比较数组
//   * @param {array} left 
//   * @param {array} right 
//   * @param {function} judge 
//   */
// function mergeArr(left, right, judge) {
//   let res = [], il = 0, ir = 0;
//   // 返回新的数组 每次比较两个数组 
//   while (il < left.length && ir < right.length) {
//     // if (left[il] < right[ir]) {
//     if (judge(left[il], right[ir])) {
//       res.push(left[il++]);
//     } else {
//       res.push(right[ir++]);
//     }
//   }
//   while (il < left.length) {
//     res.push(left[il++]);
//   } 
//   while (ir < right.length) {
//     res.push(right[ir++]);
//   }
//   return res;
// } 

// /**
//  * 递归拆分数组 直到左右至多有1个
//  * @param {array} arr 
//  */
// function mergeSorcRec(arr, judge) {
//   let length = arr.length;
//   if (length === 1) {
//     return arr;
//   }
//   let mid = length >> 1, leftArr, rightArr;
//   leftArr = arr.slice(0, mid);
//   rightArr = arr.slice(mid, length);

//   return mergeArr(mergeSorcRec(leftArr, judge), mergeSorcRec(rightArr, judge), judge);
// }

// export default function mergeSort(arr, judge = judgeFun) {
//   let resArr = mergeSorcRec(arr, judge);
//   return resArr;
// }

// 将大数组分成小数组，并调用用来排序的辅助函数
// export default function mergeSort(arry, judge = judgeFun) {
//   if (arry.length > 1) {
//     let mid = arry.length >> 1;
//     // let mid =  Math.floor(arry.length / 2);
//     const left = mergeSort(arry.slice(0, mid), judge);
//     const right = mergeSort(arry.slice(mid, arry.length), judge);
//     arry = merge(left, right, judge);
//   }
//   return arry;
// }

// // 归并的过程
// // 如果
// function merge(left, right, judge) {
//   let i = 0;
//   let j = 0;
//   const ret = [];

//   while(i < left.length && j < right.length) {
//     ret.push(
//       judge(left[i], right[j]) ? left[i++] : right[j++]
//     );
//   }

//   return ret.concat(i < left.length ? left.slice(i) : right.slice(j));
// }


// var merge = function(left, right) {
//   let i = 0;
//   let j = 0;
//   const ret = [];

//   while(i < left.length && j < right.length) {
//     ret.push(
//       (left[i] - right[j] > 0) ? left[i++] : right[j++]
//     );
//   }

//   return ret.concat(i < left.length ? left.slice(i) : right.slice(j));
// }

// var mergeSortRec = function(array) {
//   if (array.length > 1) {
//     console.log('array:::', array);
//     let mid = array.length >> 1;
//     let left = mergeSortRec(array.slice(0, mid));
//     let right = mergeSortRec(array.slice(mid, array.length));
//     array = merge(left, right);
//   }
//   return array;
// }

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var mergeSort = function(nums1, m, nums2, n) {
//   // nums1 = [];
//   // let res = []
//   let res = mergeSortRec(nums1.slice(0, m).concat(nums2.slice(0, n)));
//   console.log(res)
//   // nums1 = [...res];
//   // console.log(nums1)
//   // l = m + n, m--, n--
//   //   while(l--) {
//   //       nums1[l] = (nums2[n] === undefined ? -Infinity : nums2[n]) >= (nums1[m] === undefined ? -Infinity : nums1[m]) ? nums2[n--] : nums1[m--]
//   //   }
// };

function judgeFun(prev, next) {
  return next - prev > 0;
}

function merge(left, right, judge) {
  let i = 0;
  let j = 0;
  let ret = [];

  while(i < left.length && j < right.length) {
    ret.push(
      judge(left[i], right[j]) ? left[i++] : right[j++]
    );
  }

  return ret.concat(
    i < left.length ? left.slice(i) : right.slice(j)
  )

}

function mergeSort(array, judge = judgeFun) {
  if (array.length > 1) {
    let mid = array.length >> 1;
    let leftArray = mergeSort(array.slice(0, mid), judge);
    let rightArray = mergeSort(array.slice(mid), judge);
    array = merge(leftArray, rightArray, judge);
  }

  return array;
}


export default mergeSort;