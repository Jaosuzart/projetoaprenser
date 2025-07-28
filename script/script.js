document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var hamburger = document.getElementById("hamburguer-button");
  var closeBtn = document.querySelector(".menu-close-btn");

  function updateMenuState() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      if (document.body.classList.contains("menu-open")) {
        menu.removeAttribute("inert");
      } else {
        menu.setAttribute("inert", "");
      }
    } else {
      document.body.classList.remove("menu-open");
      menu.removeAttribute("inert");
    }
  }

  function openMenu() {
    document.body.classList.add("menu-open");
    updateMenuState();
    menu.querySelector("a").focus();
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    updateMenuState();
    hamburger.focus();
  }

  updateMenuState();

  hamburger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  window.addEventListener("resize", updateMenuState);
});
