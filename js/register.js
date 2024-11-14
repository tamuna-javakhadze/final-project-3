// form
const form = document.getElementById('form');

form.addEventListener("submit", function(e){
  e.preventDefault();
  let error = {}

  const firstNameValue = document.getElementById('first-name').value;
  if(firstNameValue === ""){
    error.firstname = "please fill out the field above";
  }

  const lastNameValue = document.getElementById('last-name').value;
  if(lastNameValue === ""){
    error.lastname = "please fill out the field above";
  }

  const emailValue = document.getElementById('email').value;
  if(emailValue === ""){
    error.email = "please fill out the field above";
  }

  const usernameValue = document.getElementById('username').value;
  if(usernameValue === ""){
    error.username = "please fill out the field above";
  }

  const passwordValue = document.getElementById('password').value;
  if(passwordValue === ""){
    error.password = "please fill out this field above";
  }

  const passwordValue2 = document.getElementById('password2').value;
  if(passwordValue !== passwordValue2){
    error.password2 = "password doesn't match";
  }

  // clear error text
  document.querySelectorAll(".error").forEach((item) => {
    item.innerText = "";
  });

  // show error text
  for(let key in error){
    let p = document.getElementById('error_' + key);
    if(p){
      p.textContent = error[key];
    }
  }
  
  // submit
  if(Object.keys(error).length == 0){
    form.submit();
  }
});

// email regex
const emailInput = document.getElementById('email');

emailInput.addEventListener('keyup', function(){
  const emailInputValue = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById('error-email');

  if(emailInputValue.match(emailRegex)){
    emailError.innerText = "email is valid";
    emailError.style.color = "green";
    emailInput.style.border = "solid 2px green";
  }else{
    emailError.innerText = "email is invalid";
    emailError.style.color = "red";
    emailInput.style.border = "solid 2px red";
  }
  if(emailInputValue === ""){
    emailError.innerHTML = "";
    emailInput.style.border = "solid 1px #ddd";
  }
});

// password regex
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('keyup', function(){
  const passwordValue = passwordInput.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordError = document.getElementById('error-password');

  if(passwordValue.match(passwordRegex)){
    passwordError.innerText = "password is valid"
    passwordError.style.color = "green";
    passwordInput.style.border = "solid 2px green";
  }else{
    passwordError.innerText = "password must contain at least 8 characters, 1 uppercase/lowercase letter, 1 digit and 1 special character(e.g., !@#$%^&*)";
    passwordError.style.color = "red";
    passwordInput.style.border = "solid 2px red";
  }
  if(passwordValue === ""){
    passwordError.innerHTML = "";
    passwordInput.style.border = "solid 1px #ddd";
  }
})

// username regex
const usernameInput = document.getElementById('username');

usernameInput.addEventListener('keyup', function(){
    const usernameValue = usernameInput.value;
    const usernameRegex = /^[^\s]+$/;
    const usernameError = document.getElementById('error-username');
  
    if(usernameValue.match(usernameRegex)){
      usernameError.innerText = "username is valid"
      usernameError.style.color = "green";
      usernameInput.style.border = "solid 2px green";
    }else{
      usernameError.innerText = "username must not contain empty spaces";
      usernameError.style.color = "red";
      usernameInput.style.border = "solid 2px red";
    }
    if(usernameValue === ""){
      usernameError.innerHTML = "";
      usernameInput.style.border = "solid 1px #ddd";
    }
});

// show/hide icon
const icon1 = document.getElementById('show-icon1');
const icon2 = document.getElementById('show-icon2');

icon1.addEventListener("click", function(){
    const passwordValue = document.getElementById('password');
    if(passwordValue.type == "password"){
        passwordValue.setAttribute("type", "text");
        icon1.classList.remove("fa-eye");
        icon1.classList.add("fa-eye-slash");
    }else{
        passwordValue.setAttribute("type", "password");
        icon1.classList.add("fa-eye");
        icon1.classList.remove("fa-eye-slash");
    }
});
icon2.addEventListener("click", function(){
    const passwordValue2 = document.getElementById('password2');
    if(passwordValue2.type == "password"){
        passwordValue2.setAttribute("type", "text");
        icon2.classList.remove("fa-eye");
        icon2.classList.add("fa-eye-slash");
    }else{
        passwordValue2.setAttribute("type", "password");
        icon2.classList.add("fa-eye");
        icon2.classList.remove("fa-eye-slash");
    }
});