const { NotImplementedError } = require('../extensions/index.js');

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
  let bestResult = 0;
  let currentNumber;
  let strNum = n.toString();
  for (let i = 0; i < n.toString().length; i += 1)
  {
	currentNumber = parseInt(strNum.slice(0, i) + strNum.slice(i + 1));
    if(bestResult < currentNumber)
		bestResult = currentNumber;
	
  }

  return bestResult;
}

module.exports = {
  deleteDigit
};
