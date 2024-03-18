'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const footer = document.querySelector('.footer');
const cookies = document.createElement('div');

//Create a cookies banner with dataset attributes.
cookies.innerHTML =
    'We use cookied for improved functionality and analytics . <button class="btn btn--close-cookie">Got it!</button>';
cookies.classList.add('cookie-message');
footer.append(cookies);
cookies.style.height = '60px';
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        cookies.remove();
    });
cookies.setAttribute('data-id', 'cookies');

//Prevent default behaviour to move the page at the top when clicked on open account .
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach((value) => {
    value.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//To scroll at the element section--1 when clicked on learn more
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function () {
    section1.scrollIntoView({ behavior: 'smooth' });
});
