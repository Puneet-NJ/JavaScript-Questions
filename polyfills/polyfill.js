// Write a polyfil for map function in js
// No need to use Array.prototype

const arr = [10, 1, 2, 3, 4, 5];

// Map function

// Original map function

const mapFunc = arr.map((x) => {
	return x + 1;
});

// console.log(mapFunc);

// Custom map function
const myMapFunc = (arr, cb) => {
	const newArr = [];

	for (let index = 0; index < arr.length; index++) {
		newArr.push(cb(arr[index]));
	}

	return newArr;
};

const mulByTwo = (x) => {
	return x * 2;
};

const modifiedArr = myMapFunc(arr, mulByTwo);
// console.log(modifiedArr);

// Filter function

// Orignal Filter function
const evenElements = arr.filter((x) => {
	return x % 2 === 0;
});
// console.log(evenElements);

// Custom Filter function
const filterFunc = (arr, cb) => {
	let newArr = [];

	for (let index = 0; index < arr.length; index++) {
		if (cb(arr[index])) newArr.push(arr[index]);
	}

	return newArr;
};

// console.log(filterFunc(arr, (x) => x % 2 === 0));

// Orignal reduce function

// reduce function to calculate sum
const sum = arr.reduce((acc, curr) => {
	return acc + curr;
}, 0);
console.log(sum);

// reduce function to calculate the maximum
const max = arr.reduce((max, curr) => {
	if (max < curr) max = curr;

	return max;
}, arr[0]);
console.log(max);

// reduce function to calculate the minimum
const min = arr.reduce((min, curr) => {
	if (curr < min) min = curr;

	return min;
}, arr[0]);
console.log(min);
