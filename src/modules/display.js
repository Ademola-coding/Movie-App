let list = [];
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  list = [];
  for (let i = 0; i < 8; i += 1) {
    list.push(data[i]);
  }
  console.log(list);
};

const display = async () => {
  const section = document.querySelector('.series');
  await getData();
  list.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
      <img src="${item.image.medium}" alt="${item.name}">
      <div class="item-header">
        <h3>${item.name}</h3>
        <span style="font-size:200%;color:red; cursor:pointer;">&hearts;</span>
      </div>
      <div class="likes">likes</div>
      <button data-modal-target="#modal" type="button" class="commentBtn">Comments</button><br>
      <button type="button">Reservations</button>
    `;
    section.appendChild(div);
});
};

export default display;