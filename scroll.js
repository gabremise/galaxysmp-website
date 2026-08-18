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
document.addEventListener('DOMContentLoaded', () => {
  const titleEl1 = document.querySelector(".presentation-1");
  const titleEl2 = document.querySelector(".presentation-2");
  const titleEl3 = document.querySelector(".presentation-3");

  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight * 0.6) {
      titleEl1.classList.add('presentation-scrolled');
    }
    else if (window.scrollY <= window.innerHeight * 0.01) {
      titleEl1.classList.remove('presentation-scrolled');
    }
  });
});
