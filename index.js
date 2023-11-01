const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const zipcode = document.getElementById('zip-code');

const validIndicator = document.getElementById('valid-indicator');

let valid = true;

form.addEventListener('submit', (e) => {
     e.preventDefault();
     
     checkInputs();
})  


function checkInputs(){
    const emailVal = email.value.trim();
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();
    const zipcodeVal = zipcode.value.trim();

    if(usernameVal === ''){
        //error
        setInvalidFor(username, 'Username cannot be blank');
    }else{
        setValidFor(username);
    }

    if(emailVal === ''){
        setInvalidFor(email, 'Email cannot be blank');
    }else{
        setValidFor(email);
    }

    if(passwordVal === ''){
        setInvalidFor(password, 'Password cannot be blank');

        if(confirmPasswordVal === ''){
            setInvalidFor(confirmPassword, 'Password cannot be blank');
        }
    }else{
        setValidFor(password);

        if(confirmPasswordVal === ''){
            setInvalidFor(confirmPassword, 'Password cannot be blank');
        }else if(confirmPasswordVal != passwordVal){
            setInvalidFor(confirmPassword, 'Passwords do not match');
        }else{
            setValidFor(confirmPassword);
        }
    }

    if(zipcodeVal === ''){
        setInvalidFor(zipcode, 'Zip-code cannot be blank');
    }else{
        if(validZipCode(zipcodeVal)){
            setValidFor(zipcode);
        }else{
            setInvalidFor(zipcode, 'Incorrect format!')
        }
    }

    validOrNot();
}

function validOrNot(){
    if(valid){
        validIndicator.className = 'visible';
    }
}

function validZipCode(zipcode){
    return /^\d{5}(-\d{4})?$/.test(zipcode);
}

function setInvalidFor(element, message){
    const formElement = element.parentElement;
    const small = formElement.querySelector('small');
    small.innerHTML = message;
    small.classList.remove('hidden');
    small.classList.add('visible');
    formElement.className = 'form-element invalid';

    valid = false;
}

function setValidFor(element){
    const formElement = element.parentElement;
    const small = formElement.querySelector('small');
    small.classList.remove('visible');
    small.classList.add('hidden');

    formElement.className = 'form-element valid';
}
