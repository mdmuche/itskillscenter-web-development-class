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

// creating and appending elements
const newDiv = document.createElement('div');
newDiv.textContent = 'i am a new div';
document.body.appendChild(newDiv);

// removing elements
const elementToRemove = document.getElementById('sen');
elementToRemove.parentNode.removeChild(elementToRemove);

//? Events handling in DOM
//? Commonly used events
// 1. mouse events: click, dblclick, mouseover, mouseenter, mouseout
// 2. Keyboard events: keyup, keydown
// 3. form events: submit, change
// 4. window events load, resize and scroll

// adding events listners
const button = document.getElementById('btn-2');
button.addEventListener('click', () => {
    alert('this button has an alarm.....')
})

// removing an event listener with removeEventListener
