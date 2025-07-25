// Animação fade-in geral
function fadeInOnLoad(selector, delay = 0) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.4,0,0.2,1)';
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, delay + i * 120);
    });
}

const btnMenu = document.getElementById("hamburguer-button");
const menu = document.getElementById("menu");
const btnClose = document.querySelector(".menu-close");

if (btnMenu && menu) {
  btnMenu.classList.add("hamburger-button-js-enabled");

  function closeMenu() {
    btnMenu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menu.classList.add("menu-closed");
  }
  function openMenu() {
    menu.setAttribute("aria-hidden", "false");
    btnMenu.setAttribute("aria-expanded", "true");
    menu.classList.remove("menu-closed");
  }

  closeMenu();

  function toggleMenu() {
    let expanded = btnMenu.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  btnMenu.addEventListener("click", toggleMenu);

  if (btnClose) {
    btnClose.addEventListener("click", closeMenu);
  }

  const mediaQuery = window.matchMedia("(min-width: 768px)");
  function handleMediaQueryChange(e) {
    if (e.matches) {
      openMenu();
    } else {
      closeMenu();
    }
  }
  mediaQuery.addEventListener("change", handleMediaQueryChange);
  handleMediaQueryChange(mediaQuery);
}


document.addEventListener('DOMContentLoaded', () => {
    fadeInOnLoad('.header', 0);
    fadeInOnLoad('.heroBanner', 200);
    fadeInOnLoad('.escola-wrapper', 400);
    fadeInOnLoad('.contatos-wrapper', 600);
    fadeInOnLoad('.footer', 800);

    const cards = document.querySelectorAll('.curso_card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)';
        observer.observe(card);
    });
}); 