'use strict'

// burger
let burger = document.getElementById("burger");
let header = document.getElementById("header");
let navUl = document.getElementById("nav-ul");
let headerWraper = document.getElementById("header-wraper");

burger.addEventListener('click', function(){
    header.classList.toggle("toggle-header");
    navUl.classList.toggle("toggle-nav-ul");
    headerWraper.classList.toggle("toggle-header-wraper");
    burger.classList.toggle("x");
});

// scroll up button
let scrollUpButton = document.getElementById("scroll-up-button");
scrollUpButton.style.display = "none";

document.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        scrollUpButton.style.display = "block";
    }else{
        scrollUpButton.style.display = "none";
    }
});

scrollUpButton.addEventListener("click", function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


// on scroll content slide up smoothly
document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".slide-up");
  
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (position < windowHeight - 50) {
        element.classList.add("active");
      }
    });
});