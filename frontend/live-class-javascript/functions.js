//? Function Declaration
const sum = function add(num1, num2, num3 = 4) {
    return num1 + num2 + num3;
}

const result = function squareSum() {
   return sum(2, 3) ** 2;
}
// console.log(result());
//? arguments are values of parameters, parameters are placeholder values that accept inputs when the function is being called

function division(num1, num2) {
    return num1 / num2;
}

// console.log(division(10, 2)); //output => 5
// console.log(division(20, 5)); //output => 4

function modulus(num1, num2) {
    return num1 % num2;
}
// console.log(modulus(13, 4)); //output => 1

// let username = prompt('Enter your name');
function greet_(name) {
    // if(typeof(name) === 'number'){
    //     alert('invalid');
    //     return;
    // }

    // if(name === ''){
    //     alert('invalid');
    //     return;
    // } // TODO this is not working check it out
//    alert(`Welcome ${name}`);
}

// greet_(username);

//? Function Expression
const modulusExp = function(num1, num2) {
    return num1 % num2;
}
// console.log('result for modulexp: ',  modulusExp(13, 4)); //output => 1

//? Arrow Function
const modulusArr = (num1, num2) => num1 % num2;
// console.log('result for modulArr: ',  modulusArr(13, 4)); //output => 1

//? Anonymous Function
setTimeout(function() {
    // console.log('i am an anonymous function');
}, 2000);

// setInterval(function() {
//     console.log('i am a set interval anonymous function');
// }, 5000)

// function verifyOtp() {
//     try {
//         let code = Math.floor((Math.random() * 10000) - 1);
//         setTimeout(function() {
//           console.log(code.toString().padStart(4, '0'));
//         }, 2000) 
//     } catch (err) {
//         console.error(err.message);
//     }
// }

// verifyOtp();

//? IIFE (ifeoma dae share give all men)
//? ifeoma dae bakwa short wetin no good be careful bro
(function() {
    // console.log("bro dae carefull oh!🦟 she fit give you wetin no good");
})();


//? Higher order function
function operate(a, b, operation) {
    return operation(a, b);
}

const resultHof = operate(3, 4, (a, b) => a * b);
// console.log(resultHof);

const arrSort = [10, 11, 5, 3, 6, 8, 1, 4, 9, 0, 7, 12, 2];
const arrSortResult = arrSort.sort((a, b) => a - b );
// console.log(arrSortResult.join(', ').toString());

function squareSum(a, b, square) {
    const sum = a + b;
    return  square(sum);
}

const squareSumResult = squareSum(10, 12, (c) => c ** 2 );
// console.log(squareSumResult);

//? function parameters
//? default parameters
function greet_(name = 'Guest') {
    return `Hello, ${name}!`;
}
// console.log(greet_('muche'));

//? rest parameters
function sum_(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
// console.log(sum_(1, 2, 3, 4));

//? return
const undefinedLogMessage = function(message) {
    // console.log('i am ' + message + ' you dae console me nah');
}

const resultLog = undefinedLogMessage("Hello World!");
// console.log('i am ' + resultLog + ' because you didnt return me'); // Output: undefined

//? early return
function isEven(number) {
    if(number % 2 === 0) {
        return true
    }
    return false;
}
// console.log(isEven(4));
// console.log(isEven(7));

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num, i, arr) => num > 2 ? num * num : 'i am less than 2');
// console.log(squaredNumbers);

const arrMapObject = [
     {
       name: 'john doe',
       class: 'jss2',
       age: 11,
       gender: 'Male',
       isRegistered: false,
       profileImg: 'kskskskksksk.png'
    },
     {
       name: 'joe doe',
       class: 'jss3',
       age: 13,
       gender: 'Male',
       isRegistered: true,
       profileImg: 'kskskskksksk.png'
    },
     {
       name: 'sarah doe',
       class: 'jss2',
       age: 12,
       gender: 'Female',
       isRegistered: false,
       profileImg: 'kskskskksksk.png'
    },
]

const arrBoys = arrMapObject.filter(function(std, i, arr) {
    return std.gender === 'Male' ?? arr;
})
// console.log('boys: ', arrBoys)

const arrGirls = arrMapObject.filter(function(std, i, arr) {
    return std.gender === 'Female' ?? arr;
})
// console.log('girls: ', arrGirls)

const evenNumbers = numbers.filter((num) => {
    // divide the number by 2
    // num / 2;
    // the remainder must be zero(0)
    if(num % 2 === 0) return num;
})
// console.log(evenNumbers);
const arrReduce = ['apple', 'banana', 'coconut', 'avocado', 'orange', 'pineaple', 'mango'];
const resultArrReduce = arrReduce.reduce((acc, item, i, arr) => {
    // return arr.length;
    // return i + 1;
    return acc + 1;
}, 0)
// console.log(resultArrReduce);

const unSortedArrays = [9, 8, 3, 5, 6, 7, 10, 2, 1, 4];
console.log('ascending order', unSortedArrays.sort((a, b) => a - b));
console.log('descending order', unSortedArrays.sort((a, b) => b - a));

//? example Inventory Management
let inventory = [
    { item: 'orange', quantity: 6 },
    { item: 'banana', quantity: 5 },
    { item: 'cherry', quantity: 12 }
];

console.log('inventory arr: ', inventory)

//? find an item
let cherry = inventory.find((fruit) => {
 return fruit.item === 'cherry'
});
console.log('finding cherry', cherry);
let cherryIndex = inventory.findIndex((fruit) => {
    return fruit.item === 'cherry'
});
console.log('finding cherry index', cherryIndex);

//? filter items with quantity greater than 5
let greaterThanFive = inventory.filter((fruit) => {
    return fruit.quantity > 5;
});
console.log('item(s) with quantity greater than five', greaterThanFive);

//? filter items with quantity greater than 5
let greaterThanTen = inventory.filter((fruit) => {
    return fruit.quantity > 10;
});
console.log('item(s) with quantity greater than ten', greaterThanTen);

//? find the third item
let thirdItem = inventory.find((_, i) => {
    return i === 2;
})
console.log('third item on the arr', thirdItem);

let total = inventory.reduce((acc, item) => {
    return acc += item.quantity;
}, 0)
console.log('total number of items on the arr: ', total);