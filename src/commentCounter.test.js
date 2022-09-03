/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import commentCount from './modules/commentCounter.js';

test('Comments counter test', async () => {
    document.body.innerHTML = `
    <div class="left">
      <p class="eachScore">20-01-2022 <span>Dhuruv:</span>
      <span class="numberSc">Fabulous</span></p>
    </div>
    <div class="left">
      <p class="eachScore">05-04-2023 <span>Pawan:</span>
      <span class="numberSc">Amazing</span></p>
    </div>
    <div class="left">
      <p class="eachScore">21-11-2024 <span>Neelesh:</span>
      <span class="numberSc">Love It</span></p>
    </div>
    <div class="left">
      <p class="eachScore">21-11-2024 <span>Neelesh:</span>
      <span class="numberSc">Love It</span></p>
    </div>`;
    const count = document.querySelectorAll('.left');
    expect(commentCount()).toBe(4);
  });