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
        <div class="error"></div>
        </div>
        
        <div id="gender-container">
        <label for="gender">Gender:</label>
        <div id="radios">
            <input type="radio" name="input-radio" value="Male" id="male"> Male
            <input type="radio" name="input-radio" value="Female" id="female"> Female
        </div>
        <div class="error"></div>
        </div>
        
        <div id="cos-container">
        <label for="courseofstudy">Course of Study</label>
        <select name="courseofstudy" id="courseofstudy">
        <option value="">Select a course”</option>
        <option value="biology">Biology</option>
        <option value="Physics">Physics</option>
        <option value="mathematics">Mathematics</option>
        <option value="chemistry">Chemistry</option>
        <option value="medlab">Medlab</option>
        </select>
        <div class="error"></div>
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
        <div class="error"></div>
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
    const cosContainer = form.querySelector('#cos-container')
    console.log(cosContainer)
    const genderContainer = form.querySelector('#gender-container')
    console.log(genderContainer)
    const checkboxContainer = form.querySelector('#checkbox-container')
    console.log(checkboxContainer)
    
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
         ? '08140000000'
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
    // if element contains .error use it directly
    const container = element.classList.contains('container') || element.id.includes('container') ? element : element.parentElement;

    const errorDisplay = container.querySelector('.error');
    if(!errorDisplay) return;

    errorDisplay.innerText = message;
    container.classList.add('error');
    container.classList.remove('success');

    const inputControl = container.querySelector('.input');

    if (inputControl) {
      inputControl.style.border = '1px solid red';
    }
}

const setSuccess = element => {
    // if element contains .error use it directly
    const container = element.classList.contains('container') || element.id.includes('container') ? element : element.parentElement;

    const errorDisplay = container.querySelector('.error')
    if(!errorDisplay) return;

    errorDisplay.innerText = '';
    container.classList.add('success');
    container.classList.remove('error');

    const inputControl = container.querySelector('.input');
    if(inputControl){
        inputControl.style.border = '1px solid green';
    }
}

const isValidEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateInputs = () => {
    try {
     let hasError = false;
     const fullnameValue = fullName.value.trim();
     const emailValue = email.value.trim()
     const phoneNumberValue = phoneNumber.value.trim()
     const ageValue = age.value.trim()
     const passwordValue = password.value.trim()
     const confirmPasswordValue = confirmPassword.value.trim()

     const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;

     if(fullnameValue === '') {
         setError(fullName, 'Fullname required');
        } else if (!nameRegex.test(fullName)) {
         setError(fullName, 'Full name must contain only letters and at most two words')
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

     if(phoneNumberValue === '') {
        setError(phoneNumber, 'Phone number is required')
     } else if(!/^\d{11}$/.test(phoneNumberValue)) {
        setError(phoneNumber, 'Phone number must be 11 digits')
     } else {
        setSuccess(phoneNumber)
     }

    //  console.log(typeof(ageValue))
     if(ageValue === '') {
        setError(age, 'Age is required')
     } else if(isNaN(ageValue)) {
        setError(age, 'Age must be a number')
    }  else if(ageValue < 16 || ageValue > 60) {
        setError(age, 'Age must be between 16 and 600')
     } else {
        setSuccess(age)
     }

     // Gender
     const checked = document.querySelector('input[name="input-radio"]:checked')
    //  console.log(checked.value);
     if (!checked) {
    //    alert('please select your gender');
       setError(genderContainer, 'Please enter your gender')
    //    return;
          hasError = true;
     }

     // Course of study
     const selected = document.getElementById('courseofstudy')
    //  console.log(selected);
    //  console.log(selected.value);
    if(!selected.value) {
        // console.log('selected value is: ', selected.value);
        // alert('please select a course');
        setError(cosContainer, 'Please enter a course')
        // return;
        hasError = true;
    }

     if(passwordValue === '') {
        setError(password, 'Password is required')
     } else if(passwordValue.length < 8) {
        setError(password, 'Password must be atleast 8 character.')
     } else if(passwordValue !== confirmPasswordValue) {
        setError(password, "Passwords doesn't match");
     } else {
        setSuccess(password);
     }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password')
     } else if(confirmPasswordValue.length < 8) {
        setError(password, 'Password must be atleast 8 character.')
     } else if(confirmPasswordValue !== passwordValue) {
        setError(password, "Passwords doesn't match");
     } else {
        setSuccess(confirmPassword);
     }
     
     // checkbox
     const checkboxSelected = document.querySelector('input[type="checkbox"]');
    //  console.log(checkboxSelected.checked)
     if(!checkboxSelected.checked) {
        // alert('please agree to continue');
        setError(checkboxContainer, 'Please agree to continue');
        // return;
        hasError = true;
     }

     if (hasError) return;

    } catch (err) {
        console.log('Error:', err.message)
    }
}
