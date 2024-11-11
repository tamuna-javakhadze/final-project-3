// eye icon

const form = document.getElementById('form');

form.addEventListener("submit", function(e){
  e.preventDefault();
  let error = {}

  const usernameValue = document.getElementById('username').value;
  if(usernameValue === ""){
    error.username = "please fill out the field above";
  }

  const passwordValue = document.getElementById('password').value;
  if(passwordValue === ""){
    error.password = "please fill out this field above";
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

const icon1 = document.getElementById('show-icon1');

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