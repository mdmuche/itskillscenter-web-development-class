// const num = '';

//! the condition must be true for the block to execute
// if(num){
//     console.log('i dea craze');
// }

function agberoCode(agbero) {
  if(agbero < 18 && agbero >= 0){
    console.log('i dae craze');
}
if(agbero > 18 && agbero <= 45){
    console.log('i dae mad');
}
if(agbero >= 46 && agbero <= 60){
    console.log('i dae smoke igbo');
}
if(agbero >= 61 && agbero <= 75){
    console.log('rugged you');
}
if(agbero > 76 && agbero <= 120){
    console.log('on how e be all men must mount');
}

}

// agberoCode(12);
// agberoCode(39);
// agberoCode(53);
// agberoCode(67);
// agberoCode(99);

// const customerBase = [
//     {
//     name: 'John Doe',
//     hairType: 'Bone Straight',
//     itemsInCart: 1,
//     price: 1500000
// },
//     {
//     name: 'Doeri Doe',
//     hairType: 'Bone Straight',
//     itemsInCart: 1,
//     price: 1500000
// },
//     {
//     name: 'Sarah Doe',
//     hairType: 'Bone Straight',
//     itemsInCart: 1,
//     price: 1500000
// },
//     {
//     name: 'Joe Doe',
//     hairType: 'Bone Straight',
//     itemsInCart: 1,
//     price: 1500000
// },
// ]

// let hairPay = 1500000;
// let hairPay = customerBase.map(cb => {
//    return cb.price;
// })
// console.log(hairPay[0]);
// const customerPay = Number(prompt('Enter your amount to pay it must be 1,500,000'));
// const paymentInTwoDays = new Date(Date.now()).getDate() + 2;
// const paymentMonth = new Date(Date.now()).getMonth() + 1;
// const paymentYear = new Date(Date.now()).getFullYear();
// // if(customerPay === hairPay[0]) {
// if(hairPay.includes(customerPay)) {
//     alert('payment was successful expect delivery on ' + paymentInTwoDays + '/' + paymentMonth + '/' + paymentYear)
//     // console.log(customerBase.filter((cb) => cb.price).map((cb) => ('name: ' + cb.name + ', ' + 'hair: ' + cb.hairType)));
//     const customerBaseFilter = customerBase.filter((cb) => cb.price)
//     console.log(customerBaseFilter);
// } else {
//     alert('invalid amount')
// }

//? switch case
// let age = Number(prompt('your age', 0));
// switch(age) {
//     case 18:
//         console.log(`Welcome to page of ${age}`);
//         break;
//     case 30:
//         console.log(`you are ${age} years old. welcome to your page`);
//         break;
//     case 60:
//         console.log(`you are ${age} years old. welcome to your page!`);
//         break;
//     default:
//         console.log(`you are not among the age bracket`);
//         break;
// }

const value = -200;
if(value) {
    console.log('truthy');
} else {
    console.log('falsy');
}