const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");
const logo = document.querySelector(".logo");

document.querySelector(".menu-btn").addEventListener("click", () => {
    mobileMenu.classList.toggle("is-active");
});

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

