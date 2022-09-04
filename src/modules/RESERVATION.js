import display from './display.js';
import { postReservation, getReservation } from './RESERVATION-INVOLVEMENT-API.js';

// show Reservation Popup
let list = [];

export function getMovieList(movieID) {
  return movieID;
}

const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  list = [];
  for (let i = 0; i < 8; i += 1) {
    list.push(data[i]);
    getMovieList(list);
  }
};

const reservation = document.querySelector('.reservations');
const screen = document.querySelector('.screen');
const reserveAwaiting = async () => {
  await display();
  await getData();
  const ReserveBtns = document.querySelectorAll('.Reservation-btns');
  ReserveBtns.forEach((btn, id) => {
    btn.addEventListener('click', () => {
      screen.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const header = document.querySelector('header');
      const section = document.querySelector('section');
      const footer = document.querySelector('footer');
      const reservationshow = document.querySelector('.reservations');
      header.style.display = 'none';
      section.style.display = 'none';
      footer.style.display = 'none';
      reservationshow.style.display = 'flex';
      reservation.innerHTML = `
      <div class="innerReservation">
        <div class="X-mark"><button type="button" class="closeBtn">&#10008;</button>  </div>
        <img src="${list[id].image.original}" class="eachImage" alt="reserve-image">
        <div class="text-container">
          <div class="info">
            <h2 class="movie_name">${list[id].name}</h2> 
            <div class="item-detail">
              <p>Genres: ${list[id].genres}</p>
              <p>Premiered: ${list[id].premiered}</p>
              <p>Runtime: ${list[id].runtime}</p>
              <p>Rating: ${list[id].rating.average}</p>
            </div>
          </div>
          <div class="reserve-container">
            <div class="form-container">
              <h4 class="add-reservation">Add a reservation</h4>
              <form class="form1" id="${id}"  action="#"> 
                <input  class="inputs" type="text" id="user_name" required placeholder=" Your Name">   
                <input class="inputs" type="datetime" id="start_date" required  placeholder=" Start date">  
                <input class="inputs" type="datetime" id="end_date" required  placeholder=" End date"> 
                <button class="reserveBtn" type="submit"> reserve </button> 
              </form> 
            </div>
            <div class="reservation">
              <h4 class="Num-of-reservation"> Reservations<Span class="count"></Span></h4>
              <div class="reservation-Data"> </div>
            </div>
          </div>
        </div>
      </div>`;

      const Xmark = document.querySelectorAll('.X-mark');
      Xmark.forEach((X) => {
        X.addEventListener('click', () => {
          const header = document.querySelector('header');
          const section = document.querySelector('section');
          const footer = document.querySelector('footer');

          header.style.display = 'flex';
          section.style.display = 'block';
          footer.style.display = 'block';
          reservation.style.display = 'none';
          screen.classList.add('hidden');
          document.body.style.overflow = 'auto';
        });
      });

      const form = document.querySelector('form');
      const formId = form.getAttribute('id');

      getReservation(`'${formId}'`);

      form.addEventListener('submit', (e) => {
        const userName = document.getElementById('user_name').value;
        const dateStart = document.getElementById('start_date').value;
        const dateEnd = document.getElementById('end_date').value;

        const reserveList = document.querySelector('.reservation-Data');
        const singleReserve = document.createElement('p');
        singleReserve.classList.add('eachResserve');
        singleReserve.innerText = `${dateStart} - ${dateEnd}  by ${userName}`;
        reserveList.appendChild(singleReserve);

        const allReservation = document.getElementsByClassName('eachResserve');
        const count = allReservation.length;
        const CountReserve = document.getElementsByClassName('count');
        CountReserve[0].innerText = `(${count})`;
        postReservation(`'${formId}'`, `${userName}`, `'${dateStart}'`, `'${dateEnd}'`);

        document.getElementById('user_name').value = '';
        document.getElementById('start_date').value = '';
        document.getElementById('end_date').value = '';
        e.preventDefault();
      });
    });
  });
};

export default reserveAwaiting;

export const reservationCounter = (movieReservation) => {
  const ReservationCounter = movieReservation;
  return ReservationCounter;
};