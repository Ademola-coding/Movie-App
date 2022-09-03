/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import commentCount from './modules/commentCounter.js';

describe('Counters', () => {
  it('Comments counters', () => {
    document.body.innerHTML = `<div class="left">
  <p class="eachScore">
    2022-09-03
    <span>Leo:</span>
  </p>
  <span>
    <p class="numberSc">Awesome</p>
  </span>
</div>`;
    const count = document.querySelectorAll('.left');
    expect(commentCount(count.length)).toBe(count.length);
  });
});