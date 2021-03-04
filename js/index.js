burger = document.querySelector('.burger');
navbar = document.getElementById('#navbar');
logo = document.querySelector('.nav_logo');
navItems = document.querySelector('.nav_items');
navSearch = document.querySelector('.nav_srh');

burger.addEventListener('click', ()=>{
    logo.classList.toggle('v-nav-res')
    navSearch.classList.toggle('v-nav-res')
    navItems.classList.toggle('v-nav-res')
    navbar.classList.toggle('v-nav-res')
    navbar.classList.toggle('h-nav-res')
})
