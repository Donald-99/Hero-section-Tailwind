const navMenu = document.querySelector('.navMenu-js');

const menuBtn = document.querySelector('.menuBtn-js');

const closeBtn = document.querySelector('.closeBtn-js');

function toggleDropDown() {
    navMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleDropDown);
closeBtn.addEventListener('click', toggleDropDown);