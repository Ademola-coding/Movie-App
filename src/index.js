import './style.css';
import display from './modules/display.js';
import showPopup from './modules/showPopup.js';
import likes from './modules/likes.js';
import reserveAwaiting from './modules/RESERVATION.js';

display();
reserveAwaiting();

const activateLikes = () => setTimeout(() => {
  likes.displayLikes();
  likes.avtivateLikeBtns();
  showPopup();
}, 1000);
activateLikes();