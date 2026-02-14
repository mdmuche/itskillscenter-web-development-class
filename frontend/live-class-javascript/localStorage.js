const user = {
    id: 1,
    accessToken: 'jfjfjweoeokednna',
    name: 'Abula Martins Onyemuche',
    isMarried: false
}

localStorage.setItem('accessToken', user.accessToken);
localStorage.setItem('name', user.name);

let accessToken = localStorage.getItem('accessToken');
let name = localStorage.getItem('name');
document.body.innerHTML = `
    <h3>${name}</h3>
`

const userArray = [
    {name :'john doe', age: 24},
    {name :'joe doe', age: 35},
    {name :'sarah doe', age: 28},
];
for(const user of userArray){
    console.log(user);
    localStorage.setItem('name', user.name);
    let myName = localStorage.getItem('name');
    document.body.innerHTML += `
       <h3>${myName}</h3>
    `
}

let fruits = ['orange', 'mango', 'pawpaw'];
localStorage.setItem('fruits', JSON.stringify(fruits));
let myFruits = JSON.parse(localStorage.getItem('fruits'));
myFruits.map((fruits) => console.log(fruits));

// localStorage.removeItem('name');
// localStorage.clear();


let person = {
    name: 'john doe',
    email: 'johndoe@example.com',
    age: 35,
    phoneNumber: '0846477232',
    isMarried: 'Unmarried'
}


// localStorage.setItem('name', JSON.stringify(person.name));
// localStorage.setItem('email', JSON.stringify(person.email));
// localStorage.setItem('age', JSON.stringify(person.age));
// localStorage.setItem('phoneNumber', JSON.stringify(person.phoneNumber));
// localStorage.setItem('isMarried', JSON.stringify(person.isMarried));

// const userName = JSON.parse(localStorage.getItem('name'))
// const email = JSON.parse(localStorage.getItem('email')) 
// const age = JSON.parse(localStorage.getItem('age')) 
// const phoneNumber = JSON.parse(localStorage.getItem('phoneNumber')) 
// const isMarried = JSON.parse(localStorage.getItem('isMarried')) 

//? a more easier way of doing it
localStorage.setItem('objectKey', JSON.stringify(person));
let retrievedObject = JSON.parse(localStorage.getItem('objectKey'));

document.body.innerHTML += `
   <p>my name is ${retrievedObject.name} email: ${retrievedObject.email} i am ${retrievedObject.age}yrs my number is ${retrievedObject.phoneNumber} and i am ${retrievedObject.isMarried}</p>
   `; 

   // storing and retrieving nested objects in localstorage
   let nestedObject = {key1: 'Value1', key2: {nestedKey: 'NestedValue'}}
   localStorage.setItem('nestedObject', JSON.stringify(nestedObject));
   let retrievedNestedObject = JSON.parse(localStorage.getItem('nestedObject'))
   console.log(retrievedNestedObject);