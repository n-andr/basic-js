const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
	let isNested = false; 
	let newArr = []; 

	arr.forEach(element => {
		if (Array.isArray(element)) {
		isNested = true;
		newArr.push(...element);
		} else {
		newArr.push(element);
		}
	});

	return isNested ? this.calculateDepth(newArr, depth + 1) : depth;
  }
}

module.exports = {
  DepthCalculator
};
