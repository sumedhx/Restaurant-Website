const openNav = document.querySelector(".bx.bx-menu");
const closeNav = document.querySelector(".bx.bx-x");
const nav_header = document.querySelector(".header");

const showNavbar = () =>{
    nav_header.classList.add("active");
}
const hideNavbar = () =>{
    nav_header.classList.remove("active");
}

openNav.addEventListener('click', () => showNavbar());
closeNav.addEventListener('click', () => hideNavbar());