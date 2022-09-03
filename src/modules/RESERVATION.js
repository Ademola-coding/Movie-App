import display from './display.js';
import { postReservation, getReservation } from './RESERVATION-INVOLVEMENT-API.js';

// show Reservation Popup
let list = [];
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  list = [];
  for (let i = 0; i < 8; i += 1) {
    list.push(data[i]);
  }
};

const reservation = document.querySelector('.reservations');
const reserveAwaiting = async () => {
  await display();
  await getData();
  const ReserveBtns = document.querySelectorAll('.Reservation-btns');
  ReserveBtns.forEach((btn, id) => {
    btn.addEventListener('click', () => {
      const header = document.querySelector('header');
      const section = document.querySelector('section');
      const footer = document.querySelector('footer');
      const reservationshow = document.querySelector('.reservations');
      header.style.display = 'none';
      section.style.display = 'none';
      footer.style.display = 'none';
      reservationshow.style.display = 'block';
      reservation.innerHTML = `<div class="innerReservation">
        <div class="X-mark"> <i class="fa-solid fa-x X-icon"></i>  </div>
        <div class="info-image-container">
        <div class="reserve-image">
            <img src="${list[id].image.original}" class="eachImage" alt="reserve-image">
        </div>
        <div class="info">
        <h2 class="movie_name">${list[id].name}</h2> 
        <div class="item-details">
        <div>
          <p>Genres : ${list[id].genres}</p>
          <p>Premiered: ${list[id].premiered}</p>
        </div>
         <div>
          <p>Runtime : ${list[id].runtime}</p>
          <p>Rating : ${list[id].rating.average}</p>
         </div>
       </div>
       <h4 class="Num-of-reservation"> Reservations<Span class="count"></Span></h4>
       <div class="reservation-Data"> </div>
       <h4 class="add-reservation">Add a reservation</h4>
       <div class="form-container">

       <form class="form1" id="${id}"  action="#"> 
       <input  class="inputs" type="text" id="user_name" required placeholder=" Your Name">   
       <input class="inputs" type="datetime" id="start_date" required  placeholder=" Start date">  
       <input class="inputs" type="datetime" id="end_date" required  placeholder=" End date"> 
       <button   class="reserveBtn" type="submit"> reserve </button> 
      </form> 
       </div>
       </div>
      </div>
      </div>`;

      const Xmark = document.querySelectorAll('.X-icon');
      Xmark.forEach((X) => {
        X.addEventListener('click', () => {
          const header = document.querySelector('header');
          const section = document.querySelector('section');
          const footer = document.querySelector('footer');

          header.style.display = 'flex';
          section.style.display = 'block';
          footer.style.display = 'block';
          reservation.style.display = 'none';
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
        singleReserve.innerText = `${dateStart} ----- ${dateEnd}  by ${userName}`;
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