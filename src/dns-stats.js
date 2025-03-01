const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let dnsList = {};

	domains.forEach(value => {

		let parts = value.split(".").reverse();
		let subdomain = "";
		parts.forEach(part => {
			subdomain = `${subdomain}.${part}`;
     		dnsList[subdomain] = (dnsList[subdomain] || 0) + 1;

		});
	});
	return dnsList;
}

module.exports = {
  getDNSStats
};
