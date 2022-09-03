import display from './display.js';

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
       <form id="form1" action="#" >
       <input  class="inputs id="user_name" type="text" placeholder=" Your Name">    
       <input class="inputs id="start_date" type="datetime"  placeholder=" Start date"> 
       <input class="inputs id="end_date" type="datetime"  placeholder=" End date">
       <button  class="reserveBtn" type="submit"> reserve </button>
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
    });
  });
};

export default reserveAwaiting;