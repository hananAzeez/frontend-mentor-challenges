const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");
const logo = document.querySelectorAll(".logo");

document.querySelector(".menu-btn").addEventListener("click", () => {
    mobileMenu.classList.toggle("is-active");
});

logo.addEventListener("click", () => {
    console.log('clicked')
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

