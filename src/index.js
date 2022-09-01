import './style.css';
import display from './modules/display.js';
import showPopup from './modules/showPopup.js';
import likes from './modules/likes.js';

display();

const closePopup = async () => {
  await showPopup();
  const closeBtn = document.querySelectorAll('.closeBtn');
  closeBtn.forEach((cbtn) => {
    cbtn.addEventListener('click', () => {
    });
  });
};

const activateLikes = ()  => setTimeout(() => {
  likes.displayLikes();
  likes.avtivateLikeBtns();
  closePopup();
} , 1000);
activateLikes();