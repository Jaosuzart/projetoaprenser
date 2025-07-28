const menuToggle = document.getElementById("hamburguer-button");
const navMenu = document.getElementById("menu");
const menuCloseButton = document.querySelector(".menu-close-btn");

function openMenu() {
  menuToggle.classList.add("active");
  navMenu.classList.add("active");
  document.body.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
  navMenu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  menuToggle.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  navMenu.setAttribute("aria-hidden", "true");
  menuToggle.focus();
}

menuToggle.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);
