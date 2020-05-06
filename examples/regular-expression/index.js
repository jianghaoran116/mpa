/**
 * @file 正则表达式
 * @author haoran
 */

// 只包含数字
// ^[0-9]+$
const regOnlyNum1 = /^[0-9]+$/;
console.log(regOnlyNum1.test('123123adfadsf1123'));
console.log(regOnlyNum1.test('1231231123'));
console.log(regOnlyNum1.test('-123'));
console.log(regOnlyNum1.test('123.12'));
console.log(regOnlyNum1.test('-123.12'));

// 允许出现负数和小数
console.log('-------');
const regOnlyNum2 = /^[-+]?[0-9]+(\.[0-9]*)?$/;
console.log(regOnlyNum2.test('123123adfadsf1123'));
console.log(regOnlyNum2.test('1231231123'));
console.log(regOnlyNum2.test('-123'));
console.log(regOnlyNum2.test('123.12'));
console.log(regOnlyNum2.test('-123.12'));