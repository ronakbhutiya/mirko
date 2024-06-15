const nav__header = document.querySelector(".header__box");
const nav__btn = document.querySelector(".navigation__btn");
nav__btn.addEventListener("click", function () {
  nav__header.classList.toggle("active");
});

const header = document.querySelector(".header");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    ent.isIntersecting === false
      ? nav__header.classList.add("sticky")
      : nav__header.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "",
    threshold: "",
  }
);
observer.observe(header);
