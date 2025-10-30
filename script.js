// ===== Mobile menu =====
const header = document.querySelector('.nav');       // <header class="nav">
const toggle  = document.querySelector('.nav-toggle');

toggle?.addEventListener('click', () => {
  header.classList.toggle('open');                  // <-- kelas 'open' ke .nav (header)
});

// Tutup menu saat link diklik (khusus mobile)
document.querySelectorAll('.nav-menu a').forEach(a => {
  a.addEventListener('click', () => header.classList.remove('open'));
});

// ===== Footer year =====
document.getElementById('y')?.textContent = new Date().getFullYear();

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible'); // <-- pakai 'visible'
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
