let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo: ocultar
    header.style.top = "-100px"; // ajusta este valor según la altura del header
  } else {
    // Scroll hacia arriba: mostrar
    header.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});