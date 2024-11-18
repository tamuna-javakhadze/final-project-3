export function burger(){
    const burger = document.getElementById("burger");
    const header = document.getElementById("header");
    const navUl = document.getElementById("nav-ul");
    const headerWraper = document.getElementById("header-wraper");

    burger.addEventListener('click', function(){
        header.classList.toggle("toggle-header");
        navUl.classList.toggle("toggle-nav-ul");
        headerWraper.classList.toggle("toggle-header-wraper");
        burger.classList.toggle("x");
    });
}