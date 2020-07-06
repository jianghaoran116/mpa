/**
 * 假设有四种面额的钱币，1 元、2 元、5 元和 10 元
 * 一共给我 10 元
 * 可以 1 张 10 元，或者 10 张 1 元，或者 5 张 1 元外加 1 张 5 元等等
 * 如果考虑每次的金额和先后顺序
 * 那么最终一共有多少种不同的选择方式呢
 */

let arr = [];
let rewards = [1, 2, 5, 10];
let total = 10;

/**
 * @description 使用函数的递归（嵌套）调用，找出所有可能的组合
 * @param {*} totalReward - 总金额
 * @param {*} res - 保存当前的解
 */
function get(totalReward, res) {
  if (totalReward === 0) { // 如果结果等于0 表示可以
    arr.push(res);
    return false;
  }

  if (totalReward < 0) {
    return false;
  } else {
    for (let i = 0; i < rewards.length; i += 1) {
      if (totalReward === total) { // 如果totalReward回到总数 重置一下res
        res = [];
      } else {
        res = [...res];
      }
      res.push(rewards[i]);
      get(totalReward - rewards[i], res);
    }
  }
}

get(total, []);

console.log(arr);
