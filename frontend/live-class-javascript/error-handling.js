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

division(300, 0); // invalid case
division('300', 10); // invalid case
division(300, '10'); // invalid case
division(300, 10); // valid case