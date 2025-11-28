function checkout() {
  let totalAmount = Number(prompt('enter your total shopping cart amount'));

// if(totalAmount !== 'number') {
//   return alert('enter a valid number');
// };

if(isNaN(totalAmount) || totalAmount >= 0) {
  return alert('enter a valid number');
};

console.log('our original amount is: ', totalAmount);

if(totalAmount > 50 && totalAmount <= 100) {
  console.log('10% discount applied: ', (totalAmount * 0.1).toFixed(2));
    totalAmount = totalAmount - ((totalAmount * 0.1).toFixed(2))
  alert('you are given 10% off: ' + totalAmount);
} else if(totalAmount > 100) {
  console.log('20% discount applied: ', (totalAmount * 0.2).toFixed(2));
    totalAmount = totalAmount - ((totalAmount * 0.2).toFixed(2))
    alert('you are given 20% off: ' + totalAmount);
} else {
    alert('no discount applied: ' + totalAmount);
} 

if(totalAmount < 75) {
    console.log('shipping fee: $5',);
   totalAmount += 5;
}

console.log('your total amount is: ' + totalAmount);
}

checkout();