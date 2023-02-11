const getGlobalUser = require('./test-global');
const transport = require('./data/my-module');

console.log('hello node world');

console.log(getGlobalUser());
console.log(process.platform);
console.log(process.env.HOME);

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
	console.log('yum', '😋');
	console.log(transport.driver, transport.science);
});

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
