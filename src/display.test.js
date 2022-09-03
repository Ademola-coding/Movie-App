/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

test('display number of items', async () => {
  // mocking the HTML
  document.body.innerHTML = `<header>
    <div class="logo">MOVdadta Logo</div>
    <div class="movies">movies</div>  
    <div class="latest">latest</div>
    <div class="old-col">old collections</div>
  </header>
  <section class="shows">
    <h2>Upcoming Shows</h2>
    <div class="series"></div>
  </section>`;
  // mocking the API response
  let list = [1, 2, 3, 4, 5, 6, 7, 8];
  const section = document.querySelector('.series');
  // mocking the display function
  list.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `test ${item}`;
    section.appendChild(div);
  });
  // mocking showing the total number of items
  const movies = document.querySelector('.movies');
  movies.innerHTML = `Series (${section.childElementCount})`;
  expect(movies.innerHTML).toBe('Series (8)');
});