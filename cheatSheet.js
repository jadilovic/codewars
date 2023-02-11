// closure
const myFunction = (name) => {
	const sayGreeting = (greeting) => {
		console.log(`${greeting} dear ${name}`);
	};
	return sayGreeting;
};
const util = myFunction('Aki');
util('Hello');
util('Good morning');

// module private method
var myModule = (function () {
	var _privateProperty = 'hello world';
	function _privateMethod() {
		console.log(_privateProperty);
	}
	return {
		publicMethod: function () {
			_privateMethod();
		},
	};
})();
myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule._privateProperty); // is undefined protected by the module closure
// myModule._privateMethod(); // is TypeError protected by the module closure

// call, apply, bind
const obj = {
	num: 3,
};
const someFunction = (num1, num2, num3) => {
	return obj.num + num1 + num2 + num3;
};
const numArrs = [1, 2, 3];
console.log('call : ', someFunction.call(obj, 1, 2, 3));
console.log('apply : ', someFunction.apply(obj, numArrs));
const binding = someFunction.bind(obj);
console.log('bind : ', binding(1, 2, 3));

// promise / async - await, then - catch
const getEvenNumber = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const num = Math.ceil(Math.random() * 10);
			console.log(num);
			if (num % 2 === 0) {
				return resolve(num);
			} else {
				return reject(new Error('It was odd number!'));
			}
		}, 500);
	});
};
getEvenNumber()
	.then((result) => console.log(result))
	.catch((error) => console.log(error.message));
const getResult = async () => {
	try {
		const result = await getEvenNumber();
		console.log(result);
	} catch (error) {
		console.log(error.message);
	}
};
getResult();

var promise1 = new Promise(function (resolve, reject) {
	let isDbOperationCompleted = false;
	if (isDbOperationCompleted) {
		resolve('Completed');
	} else {
		reject('Not completed');
	}
});
promise1
	.then(function (result) {
		console.log(result); //Output : Completed
	})
	.catch(function (error) {
		console.log(error); //if isDbOperationCompleted=FALSE
		//Output : Not Completed
	});

//iife
const sayThing = () => {
	const first = 'Mr.';
	return (name) => {
		console.log(`Hello ${first} ${name}`);
	};
};
sayThing()('Bob');

const tryFunction = () => {
	console.log(number);
	var number = 8;
};
tryFunction();

// this
const student1 = {
	name: 'aki',
};
const student2 = {
	name: 'cuni',
	display: function () {
		console.log(this.name);
	},
};
student2.display.call(student1);

const myData = {
	name: 'mark',
	city: 'Detroit',
	displayStay: function () {
		console.log(this.name, 'stays in', this.city);
	},
};
myData.displayStay();

// create an object yourData and try to use displayStay
const yourData = {
	name: 'aki',
	city: 'Bihac',
};
myData.displayStay.call(yourData);

for (var i = 1; i <= 5; i++) {
	const getNum = (i) => {
		setTimeout(() => {
			console.log(i);
		}, i * 1000);
	};
	getNum(i);
}

//
