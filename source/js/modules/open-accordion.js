const accordionBtn = document.querySelectorAll('.accordion__btn');
const accordionContent = document.querySelectorAll('.accordion__content');
const content = document.querySelector('.footer__content');
const title = document.querySelectorAll('.accordion__title');
const breakpointMobile = window.matchMedia('(max-width:767px)');

const openAccordion = () => {

  const openMenu = (i) => {
    accordionContent[i].classList.toggle('active');
    accordionBtn[i].classList.toggle('active');
  };

  const closeMenu = (i) => {
    accordionContent[i].classList.remove('active');
    accordionBtn[i].classList.remove('active');
  };

  const buttonAccordion = (btnSelector, e) => {
    btnSelector.forEach((item, i) => {
      if (e.target === item) {
        openMenu(i);
      } else {
        closeMenu(i);
      }
    });
  };

  const initAccordion = (e) => {
    if (e.target.classList.contains('accordion__btn')) {
      buttonAccordion(accordionBtn, e);
    } else if (e.target.classList.contains('accordion__title')) {
      buttonAccordion(title, e);
    }
  };

  const isMobile = () => {
    if (breakpointMobile.matches) {
      content.addEventListener('click', initAccordion);
    }
  };

  isMobile();

  breakpointMobile.addEventListener('change', isMobile);
};

export {openAccordion};
