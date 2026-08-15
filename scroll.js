let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      document.body.classList.toggle('scrolled', window.scrollY > 0);
      ticking = false;
    });
    ticking = true;
  }
});
document.querySelector('.down-arrow-container').addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight * 0.9,
    behavior: 'smooth'
  });
});

(function () {
  function handleScroll() {
    const threshold = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= threshold) {
      document.body.classList.add('scroll');
    }
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  document.addEventListener('DOMContentLoaded', handleScroll);
})();
