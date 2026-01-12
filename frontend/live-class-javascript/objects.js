const person = {
    name: 'john',
    age: 30,
    city: 'MaryLand'
}

// console.log(person['name']);
// console.log(person.name);

//? using for in loop
// build a text
let text = '';
for(let x in person) {
    text += person[x] + ' ';
}
// console.log(text);
// console.log(person);

const myArray = Object.values(person);
console.log(myArray.toString());