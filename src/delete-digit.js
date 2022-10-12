const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let num = n;
  while (num > 9) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  arr.push(num);
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return +[...arr.slice(0, i), ...arr.slice(i + 1)].join("");
    }
  }
  return +[...arr.slice(0, arr.length - 1)].join("");
}

module.exports = {
  deleteDigit,
};
