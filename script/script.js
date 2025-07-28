document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburguer-button");
  const menu = document.getElementById("menu");
  const closeButton = document.querySelector(".menu-close-btn");
  const firstLink = menu.querySelector("a");
  const body = document.body;

  // Open menu
  hamburgerButton.addEventListener("click", function () {
    this.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    body.classList.add("menu-open");
    firstLink.focus();
  });

  closeButton.addEventListener("click", function () {
    hamburgerButton.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    body.classList.remove("menu-open");
    hamburgerButton.focus();
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      menu.getAttribute("aria-hidden") === "false"
    ) {
      hamburgerButton.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      body.classList.remove("menu-open");
      hamburgerButton.focus();
    }
  });

  if (window.innerWidth > 768) {
    menu.setAttribute("aria-hidden", "false");
    body.classList.remove("menu-open");
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.setAttribute("aria-hidden", "false");
      body.classList.remove("menu-open");
    } else if (menu.getAttribute("aria-hidden") === "false") {
      body.classList.add("menu-open");
    }
  });
});
