const swap = function(array, from, to) {
  [array[to], array[from]] = [array[from], array[to]]
}

function judgeFun(pre, next) {
  return next - pre > 0;
}

// export default function quickSort(array, judge = judgeFun) {
//   return quick(array, 0, array.length-1, judge);
// }

// function quick(array, left, right, judge) {
//   let index;
//   if (array.length > 1) {
//     index = partition(array, left, right, judge);
  
//     if (left < index-1) {
//       quick(array, left, index-1, judge);
//     }
  
//     if (index < right) {
//       quick(array, index, right, judge);
//     }
//   }

//   return array;
// }

// function partition(array, left, right, judge) {
//   let pivot = array[(left + right)>>1];
//   let i = left;
//   let j = right;

//   while(i <= j) {
//     while(judge(array[i], pivot)) {
//       i++;
//     }
//     while(judge(pivot, array[j])) {
//       j--;
//     }
//     if (i <= j) {
//       swap(array, i, j);
//       i++;
//       j--;
//     }
//   }

//   return i;
// }

function partition(array, left, right, judge) {
  let i = left;
  let j = right;
  let pivot = array[(left + right) >> 1];

  while (i <= j) {
    while (judge(array[i], pivot)) {
      i++;
    }

    while (judge(pivot, array[j])) {
      j--;
    }

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }

  return i;
}

// 左右指针
function quick(array, left, right, judge) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, judge);
    if (left < index - 1) {
      quick(array, left, index-1, judge);
    }

    if (index < right) {
      quick(array, index, right, judge);
    }
  }

  return array;
}


function quickSort(array, judge = judgeFun) {
  return quick(array, 0, array.length - 1, judge);
}

export default quickSort;
