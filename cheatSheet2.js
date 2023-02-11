a(); // - difference between function statement and function expression
// b(); - b throws and error as it is undefined at hoisting

// Function Statement aka Function Declaration
function a() {
	console.log('I am function a() statement or declaration');
}

// Function Expression
// Same behavior for var, let and const
const b = function () {
	console.log('I am function b() expression');
};

a();
b();

// Anonymous Function
//  function () {
// Function statements require a function name
//  }

// Named Function Expression
const c = function xyz() {
	// as anonymous function
	console.log('start');
	console.log('I am Named Function Expression');
	console.log(xyz); // will show function
	console.log('end');
	//	console.log(xyz()); // can be called in the inside of block but it creates infinite loop
};

c();
// xyz(); - outside of scope cannot be called - throws error

// Difference between Arguments and Parameters
const d = function (parameter1, parameter2, parameter3) {
	// these are the parameters
	console.log(
		'These are parameters ' + parameter1 + '... that I got from arguments'
	);
};

d(5, 6, 7); // These are the arguments

// First Class Functions
// First class functions is the ability of functions to be passed as arguments in functions and returned from functions as values,
// Also, ability to assign it to variables as values and passed as values, treated as a value, passed to a function, returned from a function
// Same as First Class Citizens
const e = (param) => {
	param();
};

const f = (param) => {
	// return function () {
	// 	console.log('returning function');
	// };
	return param;
};

e(
	(test = () => {
		console.log('test');
	})
);

const g = () => {
	return 'g function';
};

// console.log(f('hi')());

console.log(f(g()));
