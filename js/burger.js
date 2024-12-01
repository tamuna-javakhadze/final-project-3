export default function burger(){
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
}