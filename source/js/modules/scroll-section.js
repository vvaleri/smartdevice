const scrollLiks = document.querySelectorAll('[data-scroll="link"]');

const scrollToSection = () => {
  scrollLiks.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      const idLink = item.getAttribute('href').substring(1);

      document.getElementById(idLink).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export {scrollToSection};
