(function groceryApp(){
  let totalBill = 0;
while(true) {
  const itemName = prompt('Enter the name of the item you want to buy.')
  console.log(typeof itemName);
  // if(itemName !== 'string') {
  //  return alert('enter item name in string');
  // }
const itemQuantity = Number(prompt('Enter the quantity of the item you want to buy.'))

if (isNaN(itemQuantity) || itemQuantity <= 0){
  return alert('must be a valid number');
} 

const itemPrice = Number(prompt('Enter the price of the item you want to buy.'))

if (isNaN(itemPrice) || itemPrice <= 0) {
  return alert('must be a valid number');
}

// to get totalBill we multiply itemQuantity and itemPrice
// add a discount of 0.1 if totalBill is above $50

totalBill += itemQuantity * itemPrice;
let enterMultipleEntries = prompt('Do you want to enter another item?');
// enterMultipleEntries = 'YES';
if(enterMultipleEntries.toLowerCase() !== 'yes') {
    break;
}
}

if(totalBill > 50) {
    totalBill -= totalBill * 0.1;
}

console.log('total Bill is: ' + totalBill);
}) ();