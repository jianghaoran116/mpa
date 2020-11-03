/**
 * @file 零散点
 * @author haoran
 */

function factorial (n, res) {
  if (n === 0) {
    return Promise.resolve()
      .then(() => {
        return res;
      })
  }
  res = n * res
  return Promise.resolve()
    .then(() => {
      return factorial(n - 1, res)
    })
  // return new Promise.resolve().then(factorial(n - 1, res))
}

const the100fac = factorial(11396, 1);
console.log(the100fac.then((res) => { console.log(res) }))