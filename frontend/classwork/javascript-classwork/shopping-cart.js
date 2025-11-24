function checkout() {
  let totalAmount = Number(prompt('enter your total shopping cart'));

if(isNaN(totalAmount) || totalAmount <= 0 || typeof(totalAmount) !== 'number') {
  return alert('enter a valid number');
};

console.log('our original amount is: ', totalAmount);

if(totalAmount > 50 && totalAmount <= 100) {
    totalAmount = totalAmount - (totalAmount * 0.1)
  alert('you are given 10% off:' + totalAmount);
} else if(totalAmount > 100) {
    totalAmount = totalAmount - (totalAmount * 0.2)
    alert('you are given 10% off:' + totalAmount);
} else {
    alert('no discount applied:' + totalAmount);
} 

if(totalAmount < 75) {
    console.log('shipping fee: $5',);
   totalAmount += 5;
}

console.log('your total amount is: ' + totalAmount);
}

// checkout();