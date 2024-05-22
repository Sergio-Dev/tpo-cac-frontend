// navbar_toggle
const nav_toggle = document.querySelector(".navbar_toggle");

// navbar_menu
const navbar_menu = document.querySelector(".container_menu");

nav_toggle.addEventListener('click', ()=>{
    navbar_menu.classList.toggle("nav_menu-visible");
})