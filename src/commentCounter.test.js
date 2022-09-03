/**
 * @jest-environment jsdom
 */

// eslint-disable-next-line import/no-unresolved
import commentCount from './modules/commentCounter.jd';

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
    expect(commentCount(count)).toBe(5);
  });
});