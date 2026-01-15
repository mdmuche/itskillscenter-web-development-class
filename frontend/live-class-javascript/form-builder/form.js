const btn = document.querySelector('button');
const form = document.querySelector('form');
const inputEnter = document.getElementById('input-enter')

function createNewField() {
    // create a new input element;
    const newInput = document.createElement('input');
    // set attributes for the new input element;
    // newInput.setAttribute('type', 'text');
    // newInput.setAttribute('placeholder', 'enter your name');
    const inputField = prompt('enter a value');
    console.log(inputField);
    //append the new input element tot he form container

}

btn.addEventListener('click', createNewField);