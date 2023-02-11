global.user = 'aki';

const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./data/document.txt', 'utf-8');

readFile('./data/document2.txt', 'utf-8', (err, data) => {
	console.log(data);
});

console.log(txt);
console.log('have you read it?');
