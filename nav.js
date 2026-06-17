(() => {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero, .page-hero");

  if (!header || !hero) return;

  const updateLogo = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    header.classList.toggle("logo-hidden", heroBottom > header.offsetHeight);
  };

  header.classList.add("logo-hidden");
  updateLogo();
  window.addEventListener("scroll", updateLogo, { passive: true });
  window.addEventListener("resize", updateLogo);
})();
