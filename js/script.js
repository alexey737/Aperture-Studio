const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropDownMenu = document.querySelector('.header__menu');
const body = document.body;

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    dropDownMenu.classList.toggle('active');
    body.classList.toggle('lock');
});
