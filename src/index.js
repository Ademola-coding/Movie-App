import './style.css';
import display from './modules/display.js';
import showPopup from './modules/showPopup.js';
import reserveAwaiting from './modules/RESERVATION.js';

display();
reserveAwaiting();

const closePopup = async () => {
  await showPopup();

  const closeBtn = document.querySelectorAll('.closeBtn');

  closeBtn.forEach((cbtn) => {
    cbtn.addEventListener('click', () => {
    });
  });
};

closePopup();