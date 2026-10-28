// Intégration du click sur le burger menu
// qui ouvre l'overlay de la nav

const burgerMenu = document.getElementById("burger-menu");
const closeOverlay = document.querySelector(".close-overlay");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", () => {
  overlay.classList.toggle("open");
});

closeOverlay.addEventListener("click", () => {
  overlay.classList.toggle("open");
});
