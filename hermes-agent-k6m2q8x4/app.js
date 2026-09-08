document.querySelectorAll('.day-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.day-card');
    const willOpen = !card.classList.contains('open');
    document.querySelectorAll('.day-card').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.day-toggle').setAttribute('aria-expanded', 'false');
      item.querySelector('.toggle-mark').textContent = '+';
      item.querySelector('.day-content').hidden = true;
    });
    if (willOpen) {
      card.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('.toggle-mark').textContent = '−';
      card.querySelector('.day-content').hidden = false;
    }
  });
});

const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .15, .4] });
  sections.forEach((section) => observer.observe(section));
}
