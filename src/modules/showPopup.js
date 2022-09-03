import display from './display.js';
import commentCount from './commentCounter.js';

let list = [];
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  list = [];
  for (let i = 0; i < 8; i += 1) {
    list.push(data[i]);
  }
};

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const key = 'Iu2qybFQO09vyUXDnXH9';

const modalDiv = document.querySelector('.popupModal');

const showPopup = async () => {
  await display();
  await getData();

  const commentBtns = document.querySelectorAll('.commentBtn');
  const screen = document.querySelector('.screen');

  commentBtns.forEach((btn, id) => {
    btn.addEventListener('click', () => {
      screen.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      modalDiv.innerHTML = `
      <div class="modal active">
        <div class="modalMainSection">
          <button type="button" class="closeBtn">&#10008;</button>
          <img src="${list[id].image.original}" alt=""/>
          <div class="textContent">
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
            <div class="commentContainer">
              <div id="form">
                <h2 id="plusComment">Add a comment</h2>
                <input type="text" id="username" placeholder="Your name" />
                <input type="text" id="comment" placeholder="Add Your comment" />
                <button type="submit" id="submitBtn">Submit</button>
              </div>
              <div>
                <h2 id="commentTitle">Comments</h2>
                <div id="commentsDisplay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      const closeButtons = document.querySelectorAll('.closeBtn');
      const removebtn = document.querySelectorAll('.modal');
      closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          removebtn.forEach((btn) => {
            btn.classList.remove('active');
          });
          screen.classList.add('hidden');
          document.body.style.overflow = 'auto';
        });
      });
      const submitBtn = document.getElementById('submitBtn');

      submitBtn.addEventListener('click', () => {
        // eslint-disable-next-line camelcase
        const item_id = id;
        const usernameInput = document.getElementById('username');
        const commentInput = document.getElementById('comment');
        const username = usernameInput.value;
        const comment = commentInput.value;
        const dataToSend = JSON.stringify({ item_id, username, comment });
        async function postData(url = '', data = {}) {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: data,
          });

          return response;
        }

        postData(`${url}${key}/comments`, dataToSend)
          .then((json) => {
            // eslint-disable-next-line no-unused-expressions
            json; // Handle success
          })
          .catch((err) => {
            // eslint-disable-next-line no-unused-expressions
            err; // Handle errors
          });
        usernameInput.value = '';
        commentInput.value = '';
      });

      async function getData(url = '') {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        });

        return response;
      }

      const commentsDisplay = document.getElementById('commentsDisplay');

      const myComments = () => {
        getData(`${url}${key}/comments?item_id=${id}`).then(async (res) => {
          const array = await res.json();
          return array;
        })
          .then((array) => {
            if (array.length > 0) {
              const gege = array
                .map(
                  (items) => `
                  <div class="left">
                    <p class="eachScore">${items.creation_date} <span>${items.username}:</span>
                    <span class="numberSc">${items.comment}</span></p>
                  </div>`,
                )
                .join(' ');
              commentsDisplay.innerHTML = gege;
            // eslint-disable-next-line no-empty
            } else {
            }
          });
      };
      myComments();
      setTimeout(() => {
        const total = commentCount();
        const counter = document.getElementById('commentTitle');
        counter.innerHTML = `Comments (${total})`;
      }, 2000);
    });
  });
};

export default showPopup;
