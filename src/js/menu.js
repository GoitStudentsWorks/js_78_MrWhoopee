const burgerEl = document.querySelector('.burger-button');
const closeBtnEl = document.querySelector('.mobile-menu-close-btn');
const mobMenuEl = document.querySelector('.mobile-menu');
const bodyEl = document.body;
const menuLinks = document.querySelectorAll('.menu-nav-link');
const registerBtn = document.getElementById('mobile-menu-register-btn');

// burgerEl.addEventListener("click", () => {
//     modal.classList.toggle("is-open")
// })

// closeBtnEl.addEventListener("click", () => {
//     modal.classList.toggle("is-open")
// })

burgerEl.addEventListener('click', toggleModal);
closeBtnEl.addEventListener('click', toggleModal);
registerBtn.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function toggleModal() {
  mobMenuEl.classList.toggle('is-open');

  if (mobMenuEl.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}

function closeMenu() {
  mobMenuEl.classList.remove('is-open');
  bodyEl.style.overflow = 'visible';
}
