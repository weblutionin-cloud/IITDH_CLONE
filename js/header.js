const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('primary-navigation');

navToggle.addEventListener('click', (e) => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});


document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
