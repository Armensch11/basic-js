const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    while (arr[i] === -1) {
      i++;
    }
    for (let j = i + 1; j < len; j++) {
      while (arr[j] === -1) {
        j++;
      }
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight,
};
