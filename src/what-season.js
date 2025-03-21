const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	console.log("date is" + date);
	if (!date) return "Unable to determine the time of year!";
	try {
		if (!(date instanceof Date) || Object.prototype.toString.call(date) !== "[object Date]" 
		  || isNaN(date.getTime()) || date.hasOwnProperty("toString") || date.hasOwnProperty("getMonth")
		) {
		  throw new Error("Invalid date!");
		}
	  } catch (e) {
		throw new Error("Invalid date!"); 
	  }
	const month = date.getMonth();
	if (month === 11 || month <= 1) return "winter";
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  return "autumn";
}

module.exports = {
  getSeason
};
