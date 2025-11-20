//? Title: Comprehensive Practice on JavaScript Operators
//? Instructions:
//? Write a program to calculate the area and perimeter of a rectangle using arithmetic operators.
//? Use comparison operators to check if a given number is greater than 100.
//? Create a script that takes a user’s age as input and outputs whether the user is a teenager, an adult, or a senior using logical and conditional operators.
//? Concatenate a user’s first name and last name and display the full name using string operators.
//? Use typeof to determine the types of various variables: a number, a string, an object, and an array.
//? Expected Output:3
//? Rectangle area and perimeter values.
//? Boolean value for the comparison check.
//? User age classification (e.g., Teenager).
//? Full concatenated name.
//? Data types of different variables.

//? 1.
//? 1a. area is length x width
//? to calculate An Area of length 35cm and width of 25cm
const length = 35;
const width = 25;
const area = 35 * 25;
// console.log('area:', area + 'cmsquare');

//? 1b. perimeter is P = (L + W) × 2
//? calculating with same values for l and w
const perimeter = (35 + 25) * 2;
// console.log('perimeter value:', perimeter + 'cm');

//? 2.
let num_ = 25;
// console.log(num_ > 100);
// console.log(++num_ + 75 > 100);

//? 3.
const checkAge = (_age) => {
let minor = _age < 18 && _age > 0;
let adult = _age > 18 && _age <= 65;
let senior = _age > 65 && _age < 120;
let tooOld = _age > 120;

// if (minor) {
//   console.log('You are a minor you should be reading your books');
// } else if (adult) {
//   console.log('You are an adult you\'re legally responsible for yourself');
// } else if(senior) {
//     console.log('You should be a retired genius');
// } else if(tooOld) {
//     console.log('You no want die?');
// } else {
//     console.log();
// }

///? using ternary
return _age < 0
   ? 'invalid computational algorithm' 
   : minor ? 'You are a minor you should be reading your books'
   : adult ? 'You are an adult you\'re legally responsible for yourself'
   : senior ? 'You should be a retired genius'
   : 'You no want die?';
};

///? check for different cases
//? case 1. let _age = -10000;
//? case 2. let _age = 12;
//? case 3. let _age = 35;
//? case 4. let _age = 78;
//? case 5. let _age = 135;

// console.log(checkAge(-10000)); // 1. output => invalid computational algorithm 
// console.log(checkAge(12)); // 2. output => You are a minor you should be reading your books
// console.log(checkAge(35)); // 3. output => You are an adult you're legally responsible for yourself
// console.log(checkAge(78)); // 4. output => You should be a retired genius
// console.log(checkAge(135)); // 5. output => You no want die?

//? 4.
//? string operator
const firstName = 'Martins';
const lastName = 'Abula';
console.log(firstName + ' ' + lastName);

//? 5.
//? typeof
const __age = 35;
const fullName = 'Abula Martins Onyemuche';
const details = {
  State: 'Rivers',
  University: 'Rivers State University',
  isMarried: false
}
const hobbies = ['coding', 'movies', 'sky diving'];

console.log(typeof(__age));
console.log(typeof(fullName));
console.log(typeof(details));
console.log(typeof(hobbies));
console.log(typeof(Object) === typeof(Array));
