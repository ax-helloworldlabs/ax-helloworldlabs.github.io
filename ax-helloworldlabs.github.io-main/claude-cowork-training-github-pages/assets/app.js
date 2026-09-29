document.querySelectorAll('.day-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.day-card');
    const content = card.querySelector('.day-content');
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
      content.hidden = false;
    }
  });
});
document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => link.addEventListener('click', (event) => event.preventDefault()));
