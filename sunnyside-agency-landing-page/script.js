const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");

document.querySelector(".menu-btn").addEventListener("click", () => {
    mobileMenu.classList.toggle("is-active");
});
