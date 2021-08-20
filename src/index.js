/**
 * Funzione classica
 * @param {number} a
 */
function name(a) {
	return a + 100;
}

/**
 * Equivalente:
 * @param {number} a
 */
(a) => a + 100;

/**
 * Funzione classica
 * @param {number} a
 * @param {number} b
 */
function name1(a, b) {
	return a + b + 100;
}

/**
 * Equivalente:
 * @param {number} a
 * @param {number} b
 */
(a, b) => a + b + 100;

// Funzione classica
let c = 4;
let d = 2;
function name2() {
	return c + d + 100;
}

// Equivalente:
let e = 4;
let f = 2;
() => e + f + 100;

/**
 * Funzione classica
 * @param {number} a
 * @param {number} b
 */
function name3(a, b) {
	let chuck = 42;
	return a + b + chuck;
}

/**
 * Equivalente:
 * @param {number} a
 * @param {number} b
 */
(a, b) => {
	let chuck = 42;
	return a + b + chuck;
};

// An empty arrow function returns undefined
let empty = () => {};

/**
 *
 * @param {*} a
 * @returns
 */
let simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

let max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, ...

let arr = [5, 6, 13, 0, 1, 18, 23];

let sum = arr.reduce((a, b) => a + b);
// 66

let even = arr.filter((v) => v % 2 == 0);
// [6, 0, 18]

let double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
	.then((a) => {
		// ...
	})
	.then((b) => {
		// ...
	});

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
	console.log("I happen sooner");
	setTimeout(() => {
		// deeper code
		console.log("I happen later");
	}, 1);
}, 1);
