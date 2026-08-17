const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
const topBtn = document.getElementById('topBtn');

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent(data.get('subject'));
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
  );
  window.location.href = `mailto:vishalsingh42096@gmail.com?subject=${subject}&body=${body}`;
});
