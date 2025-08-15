const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");
const header = document.getElementById("header")

menuIcon.addEventListener("click", () => {
    menu.style.display = "flex";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    menu.style.display = "none";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
});

window.onscroll = () => {
    header.classList.toggle('scrolled', scrollY > 50);
}