//? getElementById;
//? getElementByClassName
//? querySelector
//? querySelectorAll
let heading = document.getElementById('heading');

heading.style.backgroundColor = 'red';

const paras = document.querySelectorAll('p');
const para = document.getElementsByClassName('para');
console.log(para.length);
paras.forEach(para => para.style.color = 'blue');

for(let i = 0; i < para.length; i++){
    if(para[i].addEventListener('click', () => {
        para[i].textContent = 'i have been clicked'
    }));
}

paras[0].innerHTML = '<h2>I am the new Heading<h2>';

// para.map((p) => console.log(p)); //! this does not work because getElementByClassName returns a htmlcollection which array mathods will not work on

//? getElementByTagName
const listItem = document.getElementsByTagName('li');
// listItem.map(item => console.log(item)); //! this does not work because getElementByClassName returns a htmlcollection which array mathods will not work on

const btn = document.getElementsByClassName('btn')[0];
const img = document.getElementsByTagName('img')[0];
// https://placeholder

btn.addEventListener('click', () => {
    // img.src = './img/card-2.png';
   img.getAttribute('img');
   img.setAttribute('src', './img/card-2.png');
   img.setAttribute('alt', 'card 2');
})