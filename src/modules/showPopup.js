import display from './display.js';

let list = [];
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  list = [];
  for (let i = 0; i < 8; i += 1) {
    list.push(data[i]);
  }
};

const modalDiv = document.querySelector('.popupModal');

const showPopup = async () => {
  await display();
  await getData();

  const commentBtns = document.querySelectorAll('.commentBtn');

  commentBtns.forEach((btn, id) => {
    btn.addEventListener('click', () => {
      modalDiv.innerHTML = `
      <div class="modal active">
        <button type="button" class="closeBtn">close</button>
        <div class="showImg">
          <img src="${list[id].image.original}" alt=""/>
        </div>
        <div class="mainInfo">
          <h2 class="showTitle">${list[id].name}</h2>
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
        </div>
      </div>`;

      const closeButtons = document.querySelectorAll('.closeBtn');
      const removebtn = document.querySelectorAll('.modal');
      closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          removebtn.forEach((btn) => {
            btn.classList.remove('active');
          });
        });
      });
    });
  });
};

export default showPopup;
