//? example Inventory Management
let inventory = [
    { item: 'orange', quantity: 6 },
    { item: 'banana', quantity: 5 },
    { item: 'cherry', quantity: 12 }
];

//? find an item
let cherry = inventory.find((fruit) => {
 return fruit.item === 'cherry'
});
// console.log(cherry);
let cherryIndex = inventory.findIndex((fruit) => {
    return fruit.item === 'cherry'
});
// console.log(cherryIndex);

//? filter items with quantity greater than 5
let greaterThanFive = inventory.filter((fruit) => {
    return fruit.quantity > 5;
});
// console.log(greaterThanFive);

//? filter items with quantity greater than 5
let greaterThanTen = inventory.filter((fruit) => {
    return fruit.quantity > 10;
});
// console.log(greaterThanTen);

//? find the third item
let thirdItem = inventory.find((_, i) => {
    return i === 2;
})
// console.log(thirdItem);

let total = inventory.reduce((acc, i, arr) => {
    return acc += i.quantity;
}, 0)
// console.log(total);

let arrLength = ['muche', 'seven', 'eight', 'eba', 'other', 'them', 'console'];
// console.log(arrLength[arrLength.length - 1]);
for(let i=0; i < arrLength.length; i++){
//    console.log(arrLength[i]);
}

let arrTasks = ['brush teeth', 'warm eba', 'exercise', 'bath']
console.log(arrTasks.splice(2, 1));
arrTasks.push('eat eba'); // adds to the end of the array
console.log(arrTasks);
arrTasks.unshift('pray'); // adds to the start of the array
console.log(arrTasks);
arrTasks.pop();
console.log(arrTasks);
arrTasks.shift('warm eba');
console.log(arrTasks);