const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const icon = toggleBtn.querySelector('.icon');

toggleBtn.addEventListener('click', () => {
navLinks.classList.toggle('show');
const menuOpen = navLinks.classList.contains('show');
  icon.innerHTML = menuOpen ? '&#10005;' : '&#9776;'; // ✖ o ☰
});