const block = document.querySelector('[data-move="block"]');
const blockOnMobile = document.querySelector('[data-move="mobile"]');
const blockOnDesktop = document.querySelector('[data-move="desktop"]');
const breakpoint = window.matchMedia('(max-width:1023px)');

const moveBlock = () => {

  function isMatches() {
    if (breakpoint.matches) {
      blockOnMobile.append(block);
    } else {
      blockOnDesktop.after(block);
    }
  }
  isMatches();

  breakpoint.addEventListener('change', isMatches);
};
export {moveBlock};
