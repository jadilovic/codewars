// unique list
const list = ['bob', 'mark', 'aki', 'cunt', 'bob', 'mark', 'aki', 'cunt'];
const uniqueList = [...new Set(list)];
console.log(uniqueList);

// sum of array is even or odd
const numList = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1];
const isEvenOrOdd = (numArr) => {
	if (numArr.length === 0) {
		return 'even';
	}
	const getTotal = numArr.reduce((acc, curr) => {
		acc += curr;
		return acc;
	}, 0);
	return getTotal % 2 === 0 ? 'even' : 'odd';
};
console.log(isEvenOrOdd(numList));

// check if string contains all english alphabet letters
const string = 'The quick brown fox jumps over the lazy dog.';
const isPangram = (string) => {
	const matches = [...new Set(string.toLowerCase().match(/[a-zA-Z]/g))];
	if (matches.length === 26) {
		return true;
	} else {
		return false;
	}
};
console.log(isPangram(string));

// assign position numbers in alphabet to letters in the string
const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
function alphabetPosition(text) {
	const letters = string.toLowerCase().match(/[a-zA-Z]/g);
	if (!letters) {
		return '';
	}
	const numbers = letters.map((letter) => {
		return alphabet.indexOf(letter) + 1;
	});
	return numbers.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Return the number (count) of vowels in the given string
const getCount = (str) => {
	const vowels = ['a', 'i', 'e', 'o', 'u'];
	const letters = str.match(/[a-zA-Z]/g);
	let count = 0;
	letters?.map((letter) => {
		if (vowels.includes(letter)) {
			count++;
		}
	});
	return count;
};
console.log(getCount('abracadabra'));

// Printer errors
const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
const printerString = 'aaaxbbbbyyhwawiwjjjwwm';

const printerErrors = (string) => {
	const colorsString = 'abcdefghijklm';
	let countErrors = 0;
	string.split('').forEach((letter) => {
		if (!colorsString.includes(letter)) {
			countErrors++;
		}
	});
	return `${countErrors}/${string.length}`;
};
console.log(printerErrors(printerString));

// prime numbers
function isPrime(num) {
	// if (num <= 1) return false;
	// if (num === 2) return true;
	// for (let i = 2; i < num; i++) {
	// 	if (num % i === 0) {
	// 		return false;
	// 	}
	// }
	// return true;
	for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
}
console.log(isPrime(75));
console.log(isPrime(9801));
console.log(isPrime(13037));
