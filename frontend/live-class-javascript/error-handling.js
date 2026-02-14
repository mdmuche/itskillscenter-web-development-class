//? syntax error
// console.log('hello world!';

//? runtime errors (Exceptions)
const user = undefined;
// console.log(user.name);

//? logical error
function isEven(num) {
    return num % 2 === 1;
}
// console.log(isEven(4));

//!  let user = JSON.parse('{"name":"john"}');
//!     console.log('without trycatch: ', user.age.toUpperCase()); // user.age is undefined

// try {
//     let user = JSON.parse('{"name":"john"}');
//     console.log(user.age.toUpperCase()); // user.age is undefined
// } catch (err) {
//     console.error('An error occured:', err.message);
// }

// const showName = (name) => {
//     try {
//         console.log('My name is ' + nam);
//     } catch (err) {
//         console.log('Error:', err.message);
//     }
// }

// showName('Esther');

// trycatchfinally
// try {
//     let data = JSON.parse('{"name":"john"}');
//     console.log(data.namee);
// } catch (err) {
//     console.log('Error:', err.message);
// } finally {
//     console.log('cleaning up resources');
// }

// function divide(a, b) {
//     if(b === 0) {
//         throw new Error('Cannot divide by zero');
//     }

//     return a / b;
// }

// try {
//     console.log(divide(10, 0));
// } catch (err) {
//     console.error('Math error:', err.message);
// }

// TODO create a form validate it, throw error message if the required fields are not met something like a login form

function division(numerator, denominator) {
    try {
    if(typeof(numerator) !== 'number') throw new Error('must be a number')

    if(typeof(denominator) !== 'number') throw new Error('must be a number')

    if(denominator === 0) throw new Error('enter a number greater than zero for param2');

    const divide = numerator / denominator;
    console.log('your answer is: ' + divide)
    } catch (err) {
    console.error('Error:', err.message);                
    } finally {
        console.log('mathematics is your friend');
    }
}

// division(300, 0); // invalid case
// division('300', 10); // invalid case
// division(300, '10'); // invalid case
// division(300, 10); // valid case

//? throw custom errors using throw
// function divide(a, b) {
//     if(b === 0) throw new Error('denominator must be greater than zero(0)')
//     return a / b;
// }

// try {
//     divide(5, 0);
// } catch (err) {
//     console.error(err.message);
// }

//? real life scenario
// 1. form validation
// function validateForm(username) {
//     if (!username) throw new Error('Username cannot be empty');
//     console.log('form submitted with ' + username);
// }

// try {
//     validateForm('');
// } catch (err) {
//     console.error('Error: ', err.message)
// }

// 2. fetching data from an api
// async function fetchData() {
//     try {
//         const response = await fetch('https://api.example.com/data');
//         if(!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.error('Error: ', err.message);
//     } finally {
//         console.log('Finished fetching data');
//     }
// }

// fetchData();

//? Error Object Properties
// try {
//     let x = y + 1;
// } catch (err) {
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// }

//? Custom Error Classes

class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}

function checkAge(age) {
    if (age < 18) throw new ValidationError('Age must be 18 and above');
    return true;
}

try {
    checkAge(17);
} catch (err) {
    if(err instanceof ValidationError) console.log('Validation failed', err.message);
    console.log('Unknown error');
}