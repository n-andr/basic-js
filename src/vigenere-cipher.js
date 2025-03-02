const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDir = true) {
	this.isDirect = isDir;
	this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
	if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

	for (let i = 0; i < message.length; i++) {
		let char = message[i];
		if (this.alphabet.includes(char)) {
		  let messageIndex = this.alphabet.indexOf(char);
		  let keyChar = key[keyIndex % key.length];
		  let keyShift = this.alphabet.indexOf(keyChar);
		  let encryptedChar = this.alphabet[(messageIndex + keyShift) % 26];
  
		  result += encryptedChar;
		  keyIndex++;
		} else {
		  result += char;
		}
	  }
  
	  return this.isDirect ? result : result.split("").reverse().join("");
}
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let char = encryptedMessage[i];
      if (this.alphabet.includes(char)) {
        let encryptedIndex = this.alphabet.indexOf(char);
        let keyChar = key[keyIndex % key.length];
        let keyShift = this.alphabet.indexOf(keyChar);
        let decryptedChar = this.alphabet[(encryptedIndex - keyShift + 26) % 26];

        result += decryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
