function swap(arr, from, to) {
  [arr[from], arr[to]] = [arr[to], arr[from]];
}

function judgeFun(prev, next) {
  return next - prev < 0;
}

function bubbleSort(arr, judge = judgeFun) {
  let resArr = [...arr];
  let length = resArr.length;

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - 1 - i; j += 1) {
      if (judge(resArr[j], resArr[j+1])) {
        swap(resArr, j, j+1);
      }
    }
  }
  return resArr;
}

export default bubbleSort;