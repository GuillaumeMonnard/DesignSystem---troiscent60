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

const root = document.documentElement;
const mq = matchMedia("(prefers-color-scheme: dark)");

const btnDark = document.getElementById("switch-dark");
const btnLight = document.getElementById("switch-light");

function updateButtons(theme) {
  btnDark.setAttribute("aria-pressed", theme === "dark");
  btnLight.setAttribute("aria-pressed", theme === "light");
}

btnDark.addEventListener("click", () => {
  root.dataset.theme = "dark";
  updateButtons("dark");
});

btnLight.addEventListener("click", () => {
  root.dataset.theme = "light";
  updateButtons("light");
});

// État initial : on suit le système, sans forcer de data-theme
updateButtons(mq.matches ? "dark" : "light");

// Si le système change (ex. mode sombre automatique le soir) et que l'utilisateur n'a pas cliqué
mq.addEventListener("change", (e) => {
  if (!root.dataset.theme) updateButtons(e.matches ? "dark" : "light");
});
