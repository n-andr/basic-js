const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = "";
  let count = 1;
  let letter = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === letter) {
      count += 1;
    } else {
      encodedStr += count === 1 ? letter : count + letter; 
      letter = str[i]; 
      count = 1; 
    }
  }

  if (letter) {
    encodedStr += count === 1 ? letter : count + letter;
  }
		

 
  return encodedStr;
}

module.exports = {
  encodeLine
};
