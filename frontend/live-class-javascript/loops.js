///? loops
//? while loops
const arrWhile = [
  "java",
  "javascript",
  "c++",
  "python",
  "ruby",
  "go",
  "",
  false,
  undefined,
  null,
];

let i = 0;
while (i < arrWhile.length) {
  if (arrWhile[i]) {
    //   console.log(arrWhile[i]);
  }
  i++;
}

//? dowhile loop
const doWhile = [null, undefined, "", NaN];
let j = 0;
do {
  if (j < doWhile.length) {
    //   console.log(doWhile[j]) ;
  }
  j++;
} while (doWhile[i]);

//? for loop
//? syntax:
//? for(initialization; condition; increment(decrement)) {
//?    // code to execute
//? }

const arrFor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let i = 0; i < arrFor.length; i++) arrFor[i] % 2 === 0 ? console.log(arrFor[i] + ' is an even number') : console.log(arrFor[i] + ' is an odd number');

// for(let i = 0; i < arrFor.length; i+=2) console.log('square for ' + i + '\n' + '*** ' + arrFor[i] ** 2 + ' ***');

//! try {
//! for(const i = 0; i <= 10; i+=2) {
//!      console.log(i);
//!     }
//!     } catch (err) {
//!     console.error('Error: ', err.message);
//! } ❌

// for(let i = 0; i <= 10; i+=2) {
//       console.log(i);
//     } // ✅

const fruits = ["apple", "banana", "cherry", "strawberry", "water melon"];
for (let i = 0; i < fruits.length; i++) {
  //   console.log(i + 1 + '. ' + fruits[i]);
  //   console.log(`${i + 1}. ${fruits[i]}`);
} // ✅

///? Nexted for loops
for (let i = 1; i <= 12; i++) {
  // console.log(`times table for ${i}.`);
  for (let j = 1; j <= 12; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

///? while loop e.g
let number = 7;
let guess;
// while(guess !== number){
//   guess = parseInt(prompt('Enter a number between 0 - 9'));
//   if(isNaN(guess)){
//     console.log('not a number');
//     break;
//   }
//   if(guess === number) {
//     console.log('you are correct')
//     break;
//   }

//     console.log('You are wrong');
// } // TODO this keeps getting into an infinite loop
let correctNumber = 5;
let guessed;
// while (guessed !== correctNumber) {
// guessed = parseInt(prompt("Guess the number between 1 and 10", 0));
// }
// console.log('Congratulations! You guessed the correct number.');

// using the for in loop to iterate over an object
let car = {
  brand: "toyota",
  model: "corolla",
  year: 2022,
};

for (let key in car) {
  // console.log(`${key}: ${car[key]}`);
} //! limitation: not recommended for arrays use for of instead

let stringToIterateOver = "stringtoiterateover";
for (let str of stringToIterateOver) {
  // console.log(str);
}

let nums = [1, 2, 3, 4, 5, 6];
for (const num of nums) {
  // console.log(num);
} //? for this let and const works(initialization)

//? iterating over a set
let iterableSet = new Set(["a", "b", "c", "c", "a", "d", "c"]);
// console.log(iterableSet);
for (const x of iterableSet) {
  // console.log(x);
}

const iterableArray = new Map([
  ["orange", 500],
  ["banana", 200],
  ["apple", 400],
]);

for (const x of iterableArray) {
  // console.log(x);
}

///? break and continue
for (let i = 1; i <= 10; i++) {
  if (i > 5) break;
  // console.log(i);
}

//? numbers between (1 - 100)
for (let i = 1; i <= 100; i++) {
  // console.log(i);
}

//? factorials num(num-1)
let numFact = 4;
for (let i = numFact - 1; i >= 1; i--) {
  if (numFact === 0 || numFact === 1) console.log(1);
  numFact *= i;
  // numFact = numFact * i;
}
// console.log(numFact);

//? Prime numbers
// TODO

// for(let i = 1; i <= Infinity; i++){
//   for(let j = 1; j <= Infinity; j++){
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// } //! dont do this ❌💩 I love to poo. I am going to poo on you baby 💩💩💩

let correctNumberr = 7;
let guessedd = parseInt(prompt("Guess the number between 1 and 10", 0));
if (correctNumberr !== guessedd) {
  for (let i = 1; i < 5; i++) {
    if (isNaN(guessedd)) {
      alert("enter a valid number");
    }
    guessedd = parseInt(prompt("Guess the number between 1 and 10", 0));
    if (correctNumberr === guessedd) {
      break;
    } else {
      alert("Incorrect number");
    }
  }
}
if (correctNumberr === guessedd) {
  alert("Correct Number");
}

// const userName = prompt('Enter your username');

// for(let i = 0; i <= 5; i++) {
//   let password = 123;
//   let i = parseInt(prompt('Enter your password'))
//   if(password === i){
//     alert(`welcome ${userName}`)
//     break;
//   } else {
//     alert('try again')
//   }
// }
