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

const animals = ['cats', 'dog', 'elephant'];
let aniLen = animals.length;

let text = '<ul>';

for(let i = 0; i <aniLen; i++) {
    text += '\n' + '<li>' + animals[i] + '</li>';
}
text+= '\n' + '</ul>';

console.log(text);
animals[animals.length] = 'lion';
// console.log('used length to add: ', animals)

const arrTypeOf = ['1', '2', '3', '4', '5'];
const user = {
    name: 'Abula',
    isMarried: false,
}
//? different ways to check the typeof whether the data structure used here is an array or an object is when you use the typeOf operator it returns an array as an object type
// console.log(Array.isArray(arrTypeOf));
// console.log(arrTypeOf instanceof Array);
// console.log(user instanceof Array);
// console.log(user instanceof Object);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

let x = '';
for(const car in myObj.cars) {
   x += '\n' + '<h1>' + myObj.cars[car].name + '</h1>' + '\n';
   for(const model in myObj.cars) {
    x += myObj.cars[model].models.join(' ');
   }
}

// console.log(x);