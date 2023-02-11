require('./another-global');
const { readFile } = require('fs').promises;

const readDocument3 = async () => {
	const text3 = await readFile('./data/document3.txt', 'utf-8');
	console.log(text3);
};

readDocument3();

const returnGlobalUser = () => {
	return global.user;
};

module.exports = returnGlobalUser;
