const { NotImplementedError } = require('../extensions/index.js');

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
	let result = [];
	let sortedList = [];
	let indexes = [];

	arr.forEach((value, index) => {
		if (value === -1)
			indexes.push(index);
		else
			sortedList.push(value);
	});
	sortedList = sortedList.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i += 1){
		if (indexes.includes(i))
			result.push(-1);
		else
			result.push(sortedList.shift());
	}
	return result;


}

module.exports = {
  sortByHeight
};
