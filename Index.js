// mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
toggle?.addEventListener('click', () => menu.classList.toggle('open'));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// footer year
document.getElementById('y').textContent = new Date().getFullYear();

// reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));