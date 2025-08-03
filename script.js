document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, options);
  targets.forEach(el => observer.observe(el));
});

window.addEventListener("scroll", () => {
  const heroHeight = document.querySelector(".hero").offsetHeight;
  const illust = document.getElementById("illust");

  if (window.scrollY > heroHeight / 2) {
    illust.classList.add("visible");
  } else {
    illust.classList.remove("visible");
  }
});
