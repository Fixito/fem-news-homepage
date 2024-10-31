const openMenuBtn = document.querySelector('.nav-menu-open-button');
const closeMenuBtn = document.querySelector('.nav-mobile-menu-close-button');
const overlay = document.querySelector('.overlay');
const navMobile = document.querySelector('.nav-mobile');

const showNavMenu = () => {
  overlay.classList.add('show-overlay');
  navMobile.classList.add('show-nav');
};

const hideNavMenu = () => {
  overlay.classList.remove('show-overlay');
  navMobile.classList.remove('show-nav');
};

openMenuBtn.addEventListener('click', showNavMenu);

closeMenuBtn.addEventListener('click', hideNavMenu);
