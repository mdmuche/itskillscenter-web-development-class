//! var is function scope
var age = 25; // = is called an assiognment operator
// console.log(age);
var name = "Abula Martins Onyemuche";

//? let is limited to the block they are declared
let name_1 = "john";
// console.log(name_1);
name_1 = "doe";
// console.log(name_1);

//? block scoped
const pie = 3.142;
// console.log(pie);
// pie = 3.78;
// console.log(pie);

// let if = "martins"; //! dont do this other reserve keywords are let, var, for, etc
let num1 = "123";
let num2 = 123;
let num = num1 + num2
// console.log(num);

// classNames
let itskillscenterOctCohort = ["obinna", "buchi", "fortune", "isreal", "martins", "ridwan","standfirm", "esther", "gabriel", "ngozi", "emmanuel", "sarah", "opeyemi", "mazi", "zion", "pablo", "timilehin"]
const itstuds = itskillscenterOctCohort ? itskillscenterOctCohort.map(st => {
    return "my nickname is " + st.slice(0,4) + '\n';
}) : "";
// console.log(itstuds.join(""))

try {
    {
    let blockScoped = "I exist only here";
    // console.log(blockScoped);
}

//  console.log(blockScoped); //! blockScoped isn't defined
} catch (error) {
    // console.log(error.message)
}

//? hoisting in javascript
//? variables declared with var are hoisted(moved to the top of their scope during execution). however, their value is undefined until the line of assignment.

// console.log(hoistedVar); // output undefined
var hoistedVar = "I am hoisted!";
// console.log(hoistedVar)

//? variables declared with let and const are also hoisted but are not initialized. accessing them before declaration results in a referenceError.

// console.log(hoistedLet); //! referenceError
let hoistedLet = 'I am not initialized!';

///? Dynamic Typing
// javascript allows variables to change their type dynamically during runtime.

let dynamicVar = 42;
dynamicVar = 'A string';
// console.log(dynamicVar);

////? === DATA TYPES ===?////
//? a value in javascript is always of a centain type. for example, a string or a number.

//? 1. Number 2. BigInt 3. String 4. Boolean 5. null 6. undefined 7. objects 8. symbol

//? Number - integers and floating point numbers, infinity, -infinity, and NAN.
// operators for numbers include multiplication, division, addition and subtraction, and so on.

// console.log(1/0); // infinity
// console.log(Infinity); // infinity
// console.log('my name nah emekus'/3); // NAN
// console.log(NaN ** 0);

///? BigInt
//? in javascript, the "number" type cannot safely represent integer values larger than (2 pow 53 - 1) (thats 9007199254740991), or less than -(2 pow 53 - 1) for negatives
// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992

// a bigint type was recently added to the language to represent integers of abritrary length. a bigint value is created by appending n to the end of an integer.

// the n at the end means its a bigint
const bigint = 1234567890123456789012345678901234567890n

///? String
///? Boolean (logical type)
///? Null
///? Undefined
///? Objects and Symbol

// console.log(typeof alert)
const _name = "abula martins onyemuche".toUpperCase();
alert(`hello ${1}`);
alert(`hello ${"_name"}`);
alert(`hello ${_name}`);

let b = BigInt("0b1010101001010101001111111111111111");
// console.log(b);

let currentDate = new Date();
// console.log("utc: ", currentDate.toUTCString());
// console.log("iso 8601", currentDate.toISOString());
// console.log(currentDate.toISOString().split('T')[0]); // yyyy-mm--dd

const day = String(currentDate.getDate()).padStart(2, '0');
// console.log(day);
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
// console.log(month);
const year = String(currentDate.getFullYear())
// console.log(year)
const dd_mm_yyyy = `${day}/${month}/${year}`;
// console.log(dd_mm_yyyy);
const currentDate_1 = new Date();
// console.log(currentDate_1.toLocaleString("en-NG"));
// console.log(currentDate.toDateString());

let x = 42;
// console.log(typeof(x));
// console.log(typeof(x.toString()));

// console.log(typeof(NaN));
// console.log(NaN === NaN);

let s1 = Symbol("abc");
let s2 = Symbol("abc");
// console.log(s1 === s2); // false

///? Hoisting
// greet("abula martins onyemuche");

function greet(name) {
    // console.log(`hello ${name}`);
}

// const greeting = greett('abula martins onyemuche');

const greett = (name) => {
    // console.log(`hello ${name}`)
}

//? classes are not hoisted
//! const person = new Person();
//! console.log(person("itskillscenter", "harmony ogba", "abula martins onyemuche", 29, false));

class Person {
    constructor(school, address, name, age, isMarried){
        this.school = school;
        this.address = address;
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
}

//? this is correct way
const person = new Person("itskillscenter", "harmony ogba", "abula martins onyemuche", 29, false);
console.log(person);