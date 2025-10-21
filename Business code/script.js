



document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('backToTopBtn');

  if (!btn) return;

  const SHOW_AFTER = 300; 

  function checkScroll() {
    if (window.scrollY > SHOW_AFTER) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // initial check (in case page loaded scrolled)
  checkScroll();
});
