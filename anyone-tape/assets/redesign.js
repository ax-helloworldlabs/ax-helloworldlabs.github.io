const links = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, .15, .4] });
  sections.forEach(section => observer.observe(section));
}
// Include all three days when printing, then restore the reader's open sections.
let printState;
window.addEventListener('beforeprint', () => {
  printState = [...document.querySelectorAll('.day-card')].map(card => [card, card.open]);
  printState.forEach(([card]) => { card.open = true; });
});
window.addEventListener('afterprint', () => {
  printState?.forEach(([card, open]) => { card.open = open; });
});
