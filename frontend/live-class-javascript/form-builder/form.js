const btn = document.querySelector('button');
const form = document.querySelector('#form-btn');
const inputEnter = document.getElementById('input-enter')
const err = document.getElementById('err')
const errClose = document.getElementById('err-close')
const input = document.getElementsByClassName('input')

const inputFieldArr = ['name', 'age', 'school', 'date', 'address',  'email', 'password', 'submit'];

function createNewField() {
    // create a new input element;
    // loop over array and check if the values entered in input field matches the inputFieldArr values
    
    // show error message
    // console.log(inputFieldArr[inputFieldArr.indexOf(inputEnter.value)]);
    // console.log(inputFieldArr);
    // console.log(inputFieldArr[inputEnter.value])
    // console.log(inputEnter.value === inputFieldArr[inputFieldArr.indexOf(inputEnter.value)])
    if(
        inputEnter.value !== inputFieldArr[inputFieldArr.indexOf(inputEnter.value)]
    ) {
       return err.style.display = 'block';
    }
    // TODO handle case where an input field has already been entered

    for(i = 0; i < inputFieldArr.length; i++) {      
        if (inputFieldArr[i] === inputEnter.value) {
        const newInput = document.createElement('input');
            // console.log(inputFieldArr[i])
            // set attributes for the new input element;
            newInput.setAttribute('type', inputFieldArr[i]);
            newInput.setAttribute('placeholder', 'enter your ' + inputFieldArr[i]);
            newInput.setAttribute('class', 'input');
            // console.log(newInput.type);
            //append the new input element to the form container
            form.appendChild(newInput);
            // clear input field(s)
            inputEnter.value = '';
            // TODO hide error
            // hide error msg
            err.style.display = 'none';

            if(newInput.placeholder === 'enter your name') {
                newInput.setAttribute('id', 'name')
            }
        }
    }
}

errClose.addEventListener('click', () => {
    // hide error msg
      err.style.display = 'none';
      // clear input field(s)
      inputEnter.value = '';
    })

btn.addEventListener('click', createNewField);