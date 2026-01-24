const form = document.createElement('form');
form.setAttribute('novalidate', true)
form.setAttribute('action', '/')

form.innerHTML = `
<div class="container" id="fullname-container">
<label for="fullname">Full Name</label>
<input class="input" type="text" id="fullname">
<div class="error"></div>
</div>

<div class="container" id="email-container">
<label for="email">Email</label>
<input class="input" type="email" id="email">
<div class="error"></div>
</div>

<div class="container" id="phone-container">
<label for="phonenumber">Phone Number</label>
<input class="input" type="number" id="phonenumber">
<div class="error"></div>
</div>

<div class="container" id="age-container">
<label for="age">Age</label>
        <input class="input" type="number" id="age">
        </div>
        
        <div id="gender-container">
        <label for="gender">Gender</label>
        <select name="gender">
        <option value="" disabled>Please select one…</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        </select>
        </div>
        
        <div id="cos-container">
        <label for="courseofstudy">Course of Study</label>
        <select name="courseofstudy" id="courseofstudy">
        <option value="" disabled>Course of Study</option>
        <option value="biology">Biology</option>
        <option value="Physics">Physics</option>
        <option value="mathematics">Mathematics</option>
        <option value="chemistry">Chemistry</option>
        <option value="medlab">Medlab</option>
        </select>
        </div>
        
        <div class="container" id="password-container">
        <label for="password">Password</label>
        <input class="input" type="password" id="password">
        <div class="error"></div>
        </div>
        
        <div class="container" id="confirm-container">
        <label for="confirm-password">Confirm Password</label>
        <input class="input" type="password" id="confirm-password">
        <div class="error"></div>
        </div>
        
        <div id="checkbox-container">
        <input id="checkbox" type="checkbox" />
        <label for="checkbox">I agree to these <a href="#">Terms and Conditions</a>.</label>
        </div>
        
        <div id="btn">
        <button id="register" type="submit">
        Register
        </button>
    </div>
    `
    
    document.body.appendChild(form);

    const fullName = form.querySelector('#fullname')
    const email = document.getElementById('email')
    const phoneNumber = form.querySelector('#phonenumber')
    const age = form.querySelector('#age')
    const password = form.querySelector('#password')
    const confirmPassword = form.querySelector('#confirm-password')
    
    // add a placeholder attribute to all input fields
    const input = form.querySelectorAll('.input')
    // console.log(Array.from(input));
    Array.from(input).forEach(inp => {
        const inputCaps = inp.id.slice(0,1).toUpperCase() + inp.id.slice(1,inp.length);
    // console.log(inputCaps)
    inp.setAttribute(
        'placeholder',
         inputCaps === ''
         ? 'invalid'
         : inputCaps === 'Fullname'
         ? 'John Doe'
         : inputCaps === 'Email' 
         ? 'johndoe@example.com'
         : inputCaps === 'Phonenumber' 
         ? '+23408140000000'
         : inputCaps === 'Age' 
         ? '30'
         : inputCaps === 'Password' 
         ? '*********'
         : inputCaps === 'Confirm-password' 
         ? '*********'
         : ''
        );
    // console.log(inputCaps);
    // inp.placeholder === inp.id ? input.placeholder = inp.id.slice(0,1).toUpperCase() + inp.id.slice(1,inp.length) : '';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs()
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    inputControl.querySelectorAll('.input')[0].style.border = '1px solid red';
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    inputControl.querySelectorAll('.input')[0].style.border = '1px solid green';
}

const isValidEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateInputs = () => {
    try {
     const fullnameValue = fullName.value.trim();
     const emailValue = email.value.trim()
     const phoneNumberValue = phoneNumber.value.trim()
     const ageValue = Number(age.value.trim())
     const passwordValue = password.value.trim()
     const confirmPasswordValue = confirmPassword.value.trim()

     if(fullnameValue === '') {
         setError(fullName, 'Fullname required');
        } else {
          setSuccess(fullName)
        }
    if (fullnameValue.split(' ').length > 2) setError(fullName, 'fullname must be two words')
    
    if (fullnameValue.split(' ').length === 2) setSuccess(fullName)

     if(emailValue === '') {
        setError(email, 'Email is required')
     } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
     } else {
        setSuccess(email)
     }

    //  console.log(typeof(phoneNumber))

    //  if(phoneNumberValue === '') {
    //     setError(phoneNumber, 'Phone number is required')
    //  } else if(!/^\d{10,14}$/.test(phoneNumberValue)) {
    //     setError(phoneNumber, 'Provide a valid phonenumber')
    //  } else {
    //     setSuccess(phoneNumber)
    //  }

    //  console.log(typeof(ageValue))
    //  if(ageValue === '') {
    //     setError(age, 'Age is required')
    //  } else if(isNaN(ageValue)) {
    //     setError(age, 'Age must be a number')
    // }  else if(ageValue < 18 || ageValue > 100) {
    //     setError(age, 'Age must be between 18 and 100')
    //  } else {
    //     setSuccess(age)
    //  }

     if(passwordValue === '') {
        setError(password, 'Password is required')
     } else if(passwordValue.length < 8) {
        setError(password, 'Password must be atleast 8 character.')
     } else {
        setSuccess(password);
     }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password')
     } else if(confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords doesn2t match");
     } else {
        setSuccess(confirmPassword);
     }   

    } catch (err) {
        console.log('Error:', err.message)
    }
}
