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

console.log(division(10, 2)); //output => 5
console.log(division(20, 5)); //output => 4

function modulus(num1, num2) {
    return num1 % num2;
}
console.log(modulus(13, 4)); //output => 1

// let username = prompt('Enter your name');
function greet(name) {
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

// greet(username);

//? Function Expression
const modulusExp = function(num1, num2) {
    return num1 % num2;
}
console.log('result for modulexp: ',  modulusExp(13, 4)); //output => 1

//? Arrow Function
const modulusArr = (num1, num2) => num1 % num2;
console.log('result for modulArr: ',  modulusArr(13, 4)); //output => 1