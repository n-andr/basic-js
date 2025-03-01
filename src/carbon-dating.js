const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let age;
  const k = Math.log(2)/HALF_LIFE_PERIOD;

  if (!parseFloat(sampleActivity) || typeof sampleActivity !== "string"
   || isNaN(parseFloat(sampleActivity)) === NaN 
   || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) >= MODERN_ACTIVITY)
	return false;
  age = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k;
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
