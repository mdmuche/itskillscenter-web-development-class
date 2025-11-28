//? array literal

let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits);

let numArr = new Array(1, 2, 3, 4);
// console.log(numArr);

let emptyArr = [];
// console.log(emptyArr);

let colors = ['red', 'green', 'blue'];
// console.log(colors[2] === 'blue'); // output true

// modifying array elements
const cities = ['london', 'paris', 'New York'];
cities[1] = 'obagi';
// console.log(cities);

///? Array methods
//? Push adding elements to an array. its add the value to the end of and array
let arr = [1, 2, 3];
arr.push(4);
// console.log(arr);

//? unshift
arr.unshift(0); // output: [0, 1, 2, 3, 4]
// console.log(arr);

//? pop
arr.pop()
// console.log(arr);

///? working with array methods
//? map
let nums = [1, 2, 3];
let squares = nums.map(num => num ** 2);
// console.log(squares);

//? filter
let numsFilter = [10, 15, 20, 25];
const even = numsFilter.filter(num => num % 2 === 0);
// console.log(even);

//? reduce
let numsReduce = [1, 2, 3, 4];
let sum = numsReduce.reduce((acc, i, _) => {
    return acc += i;
}, 0);
// console.log(sum);

//? find
let numsFind = [10, 15, 20];
let found = numsFind.find((num) => num > 15);
// console.log(found);

//? sort
let numsSort = [3, 2, 1, 5, 8, 4, 7, 6];
numsSort.sort((a, b) => b - a); // descending order
numsSort.sort((a, b) => a - b); // asscending order
// console.log(numsSort);

///? multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// console.log(matrix[1][2]); // output 6