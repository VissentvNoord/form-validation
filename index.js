const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');

form.addEventListener('submit', (e) => {
     e.preventDefault();
     
     checkInputs();
})  

function checkInputs(){
    const emailVal = email.value.trim();
    const usernameVal = username.value.trim();

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
}

function setInvalidFor(element, message){
    const formElement = element.parentElement;
    const small = formElement.querySelector('small');
    small.innerHTML = message;
    small.classList.remove('hidden');
    small.classList.add('visible');
    formElement.className = 'form-element invalid';
}

function setValidFor(element){
    const formElement = element.parentElement;
    const small = formElement.querySelector('small');
    small.classList.remove('visible');
    small.classList.add('hidden');

    formElement.className = 'form-element valid';
}
