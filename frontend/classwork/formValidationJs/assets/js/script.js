const form = document.createElement('form');
form.setAttribute('novalidate', true)
form.setAttribute('action', '/')

form.innerHTML = `
<div class="container con" id="fullname-container">
      <label for="fullname">Full Name</label>
      <input class="input" type="text" id="fullname">
      <div class="error"></div>
      </div>
      
      <div class="container con" id="email-container">
      <label for="email">Email</label>
      <input class="input" type="email" id="email">
      <div class="error"></div>
      </div>
      
      <div class="container con" id="phone-container">
      <label for="phonenumber">Phone Number</label>
      <input class="input" type="number" id="phonenumber">
      <div class="error"></div>
   </div>
   
   <div class="container con" id="age-container">
   <label for="age">Age</label>
   <input class="input" type="number" id="age">
      <div class="error"></div>
      </div>
        
      <div class="container" id="gender-container">
      <label for="gender">Gender:</label>
      <div id="radios">
      <input type="radio" name="input-radio" value="Male" id="male"> Male
      <input type="radio" name="input-radio" value="Female" id="female"> Female
      </div>
      <div class="error"></div>
      </div>
      
      <div class="container" id="cos-container">
      <label for="courseofstudy">Course of Study</label>
      <select name="courseofstudy" id="courseofstudy">
      <option value="">Select a course</option>
      <option value="biology">Biology</option>
      <option value="Physics">Physics</option>
      <option value="mathematics">Mathematics</option>
      <option value="chemistry">Chemistry</option>
      <option value="medlab">Medlab</option>
      </select>
      <div class="error"></div>
      </div>
      
      <div class="container con" id="password-container">
      <label for="password">Password</label>
      <input class="input" type="password" id="password">
      <div class="error"></div>
      </div>
      
      <div class="container con" id="confirm-container">
      <label for="confirm-password">Confirm Password</label>
      <input class="input" type="password" id="confirm-password">
      <div class="error"></div>
      </div>
      
      <div class="container" id="checkbox-container">
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
      const stdArr = [];
      
      const fullName = form.querySelector('#fullname')
      const email = document.getElementById('email')
    const phoneNumber = form.querySelector('#phonenumber')
    const age = form.querySelector('#age')
    const password = form.querySelector('#password')
    const confirmPassword = form.querySelector('#confirm-password')
    const cosContainer = form.querySelector('#cos-container')
    const genderContainer = form.querySelector('#gender-container')
    const checkboxContainer = form.querySelector('#checkbox-container')
    
    // add a placeholder attribute to all input fields
    const input = form.querySelectorAll('.input')
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

   
   // const validateInputs = () => {
   fullName.addEventListener('input', () => {
      const fullnameValue = fullName.value.trim();
      const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;
      
      if(fullnameValue === '') {
         fullName.addEventListener('change', () => {
            setError(fullName, 'Fullname required');
         })
           } else if (!nameRegex.test(fullName)) {
               setError(fullName, 'Full name must contain only letters and at most two words')
            } else {
            setSuccess(fullName)
         }
         if (fullnameValue.split(' ').length > 2) (fullName, 'fullname must be two words')
            
            if (fullnameValue.split(' ').length === 2) setSuccess(fullName)
            })
         
         // Validate Email
         email.addEventListener('input', () => {
            const emailValue = email.value.trim()
            if(emailValue === '') {
               setError(email, 'Email is required')
            } else if(!isValidEmail(emailValue)) {
               setError(email, 'Provide a valid email address')
   } else {
      setSuccess(email)
   }
})

// Validate Phonenumber
phoneNumber.addEventListener('input', () => {
   const phoneNumberValue = phoneNumber.value.trim()
   if(phoneNumberValue === '') {
      setError(phoneNumber, 'Phone number is required')
   } else if(!/^\d{11}$/.test(phoneNumberValue)) {
      setError(phoneNumber, 'Phone number must be 11 digits')
   } else {
      setSuccess(phoneNumber)
   }
})

// Validate Age
age.addEventListener('input', () => {
   const ageValue = age.value.trim()
   if(ageValue === '') {
      setError(age, 'Age is required')
   } else if(isNaN(ageValue)) {
      setError(age, 'Age must be a number')
   }  else if(ageValue < 16 || ageValue > 60) {
      setError(age, 'Age must be between 16 and 60')
   } else {
      setSuccess(age)
   }
})

// Validate Password
password.addEventListener('input', () => {
   const passwordValue = password.value.trim()
   if(passwordValue === '') {
      setError(password, 'Password is required')
   } else if(passwordValue.length < 8) {
      setError(password, 'Password must be atleast 8 character.')
   } else {
      setSuccess(password);
   }
})

// Validate Confirm-Password
confirmPassword.addEventListener('input', () => {
   const confirmPasswordValue = confirmPassword.value.trim()
   const passwordValue = password.value.trim()
   if(confirmPasswordValue === '') {
      setError(confirmPassword, 'Please confirm your password')
   } else if(confirmPasswordValue.length < 8) {
      setError(confirmPassword, 'Password must be atleast 8 character.')
   } else if((confirmPasswordValue !== passwordValue)) {
      setError(confirmPassword, "Passwords doesn't match");
   } else {
      setSuccess(confirmPassword);
   }
})

const validateInputs = () => {
   let hasError = false;
   
   // Gender
   const checked = document.querySelector('input[name="input-radio"]:checked')
     if (!checked) {
       setError(genderContainer, 'Please enter your gender')
         hasError = true;
     }

     //Validate Course of study
     const selected = document.getElementById('courseofstudy')
      if(!selected.value) {
         setError(cosContainer, 'Please enter a course')
         hasError = true;
      }
   // })

   //   // checkbox
     const checkboxSelected = document.querySelector('input[type="checkbox"]');
     if(!checkboxSelected.checked) {
        setError(checkboxContainer, 'Please agree to continue');
        hasError = true;
     }
     return !hasError;
}

// clear input fields after submitting form
const resetForm = () => {
   form.querySelectorAll('.input').forEach((input) => {
      input.value = '';
      input.style.border = '';
   })

   document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);

   document.getElementById('courseofstudy').value = '';

   document.getElementById('checkbox').checked = false;

   form.querySelectorAll('.container').forEach(container => {
      container.classList.remove('error', 'success');
      const err = container.querySelector('.error');
      if (err) err.innerText = '';
   })

}

form.addEventListener('submit', (e) => {
   e.preventDefault();

   let hasEmpty = false;
   form.querySelectorAll('input').forEach(input => {
      if(input.value.trim() === ''){
         hasEmpty = true;
         setError(input, 'This field is required');
      }
   })

   if(hasEmpty) return;
   
   if (!validateInputs()) return;
   alert('Regisration was Successful!')

   // reset fields
   resetForm();
})