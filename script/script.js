document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("hamburguer-button");
  const menu = document.getElementById("menu");
  const navLinks = document.querySelectorAll(".header_nav a");
  const menuCloseBtn = document.querySelector(".menu-close-btn");
  function openMenu() {
    menu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", openMenu);

  menuCloseBtn.addEventListener("click", closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
      if (this.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerOffset = document.querySelector(
            ".wrapperContainer-fixed"
          ).offsetHeight;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Evento para redimensionar a janela
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.setAttribute("aria-hidden", "false");
    } else {
      closeMenu();
    }
  });
});
