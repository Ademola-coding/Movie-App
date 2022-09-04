const postReservation = (itemId, username, datestart, dateend) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dCnHk9IpOcNtUULMh7hx/reservations/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: itemId, username, date_start: datestart, date_end: dateend,
    }),
  })
    .then((res) => res.ok)
    .then((data) => (data));
};

const getReservation = (itemId) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dCnHk9IpOcNtUULMh7hx/reservations?item_id=${itemId}`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        const reserveList = document.querySelector('.reservation-Data');
        const singleReserve = document.createElement('p');
        singleReserve.classList.add('eachResserve');
        singleReserve.innerText = `${data[i].date_start} - ${data[i].date_end}  by ${data[i].username}`;
        reserveList.appendChild(singleReserve);
      }

      const allReservation = document.getElementsByClassName('eachResserve');
      const count = allReservation.length;
      const CountReserve = document.getElementsByClassName('count');
      CountReserve[0].innerText = `(${count})`;
    });
};

export { postReservation, getReservation };