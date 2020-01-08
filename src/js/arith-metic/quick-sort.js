/**
 * @file 快速排序 
 * @author haoran
 */

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivotIdx = Math.floor((arr.length - 1)/2)
//   let pivot = arr[pivotIdx];
//   let left = [];
//   let right = [];

//   arr.splice(pivotIdx, 1); // 删除支点
//   arr.forEach((item) => {
//     item < pivot
//       ? left.push(item)
//       : right.push(item)
//   });

//   return quickSort(left).concat([pivot], quickSort(right));
// }

function swap(arr, from, to) {
  [arr[from], arr[to]] = [arr[to], arr[from]];
}

function quickSort(arr) {
  quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
  let index;

  if (arr.length > 1) {
    index = partition(arr, left, right);

    if (left < index-1) {
      quick(arr, left, index-1);
    }

    if (right > index) {
      quick(arr, index, right);
    }
  }
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right)/2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }

    while (arr[j] > pivot) {
      j -= 1;
    }

    // if (arr[i] > arr [j]) {
    if (i <= j) {
      swap(arr, i, j);
      i += 1;
      j -= 1;
    }
  }

  return i;
}

export default quickSort;
