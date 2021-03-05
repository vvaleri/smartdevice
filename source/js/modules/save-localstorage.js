import {enableScrolling} from '../utils/scroll-lock';

const btnForm = document.querySelectorAll('.form__send');
const modalForm = document.querySelector('.modal');

const saveInLocalstorage = () => {

  const saveInput = () => {
    const inputArray = Array.from(document.querySelectorAll('[data-set="save"]'));
    const valueJson = JSON.stringify(inputArray.map((item)=> item.value));
    localStorage.setItem('value', valueJson);
  };

  btnForm.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      saveInput();
      setTimeout(() => {
        modalForm.classList.remove('modal--active');
        enableScrolling();
      }, 500);
    });
  });
};
export {saveInLocalstorage};
