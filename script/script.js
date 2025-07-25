document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");
  const menuClose = document.querySelector(".menu-close");
  const overlay = document.createElement("div");

  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  function toggleMenu() {
    menuToggle.classList.toggle("active");
    menu.setAttribute(
      "aria-hidden",
      menu.getAttribute("aria-hidden") === "true" ? "false" : "true"
    );
    document.body.style.overflow =
      menu.getAttribute("aria-hidden") === "true" ? "" : "hidden";
    overlay.style.display =
      menu.getAttribute("aria-hidden") === "true" ? "none" : "block";
  }

  menuToggle.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Fecha o menu ao clicar em links internos
  const menuLinks = menu.querySelectorAll('a[href^="#"]');
  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  // Ajusta o menu em redimensionamento da tela
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.setAttribute("aria-hidden", "false");
      menuToggle.classList.remove("active");
      document.body.style.overflow = "";
      overlay.style.display = "none";
    } else {
      menu.setAttribute("aria-hidden", "true");
    }
  });
});
