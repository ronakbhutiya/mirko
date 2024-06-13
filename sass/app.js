const nav__header = document.querySelector(".header__box");
const nav__btn = document.querySelector(".navigation__btn");
nav__btn.addEventListener("click", function () {
  nav__header.classList.toggle("active");
});
