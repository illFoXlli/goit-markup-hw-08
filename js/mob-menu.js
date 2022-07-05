(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileMenuNav = document.querySelector("[data-menu-nav]");
  const mobileMenuAuth = document.querySelector("[data-menu-auth]");
  const body = document.querySelector('body');
  

  

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
     body.classList.toggle('no-scroll');

    mobileMenuRef.classList.toggle("is-open");
    mobileMenuNav.classList.toggle("is-open");
    mobileMenuAuth.classList.toggle("is-open");

  });
})();
  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-open');
    body.classList.toggle('no-scroll');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    
    
  };
