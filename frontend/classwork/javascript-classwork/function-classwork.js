// TODO this does not work as intended nb: not properly handling negative numbers
// const greet = function(name, timeOfDay) {
//     const now = Date.now();
//     const date = new Date(now);
//     timeOfDay = date.getHours();
//     return `
//   ${
//    timeOfDay < 12 && timeOfDay >= 0 
//     ? 'Good morning, ' + name
//     : timeOfDay >= 12 && timeOfDay <= 16 
//     ? 'Good afternoon, ' + name
//     : timeOfDay >= 17 && timeOfDay <= 24 
//     ? 'Good evening, ' + name
//     : 'invalid'
// }
//   `;
// }
// const greetResult = greet('muche', function(timeOfDay){
//     const now = Date.now();
//     const date = new Date(now);
//     timeOfDay = date.getHours();
//     return timeOfDay;
// })

//? Start of Greet Function
const greet = function(name, timeOfDay) {
    if(
        typeof(timeOfDay) === 'string' 
        ? (timeOfDay.toLowerCase() === 'morning'
    ) 
    : 
    (timeOfDay <= 11 && timeOfDay >= 0   )
)
{
      return `Good morning, ${name}!`
      ;
    }       
    else if(
        typeof(timeOfDay) === 'string' 
        ? (timeOfDay.toLowerCase() === 'afternoon'
    ) 
    : 
    (timeOfDay >= 12 && timeOfDay < 17)
)
{
        return `Good afternoon, ${name}!`
        ;
    } 
   else if(
    typeof(timeOfDay) === 'string' 
    ? (timeOfDay.toLowerCase() === 'evening'
) 
: (timeOfDay >= 17 && timeOfDay <= 24)
) 
{
        return `Good evening, ${name}!`
        ;
    } 
    else {
        return `Invalid`
    }
}

console.log(greet('Alice', -1));

//? End of Greet Function

const calculateArea = function(l, w) {
  return l * w + 'cmsquared';
}
// console.log(calculateArea(30, 40));

const checkEvenOdd = function(num) {
    if(num % 2 === 0) return 'Even';
    return 'Odd';
}
// console.log(checkEvenOdd(4));
// console.log(checkEvenOdd(7));
// console.log(checkEvenOdd(16));
// console.log(checkEvenOdd(53));