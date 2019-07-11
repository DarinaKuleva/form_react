import compareRandom from '../components/Header'
import sort from '../components/Header';

it('generate random field', () => {
  let gameNumbers = sort(compareRandom)

  expect(gameNumbers.sort(compareRandom).not.toEqual(gameNumbers));
  expect(gameNumbers.sort(compareRandom).not.toEqual(gameNumbers));
});

it('push fieldCell', () => {
  let cellsWrap = []
  let fieldCell = {
    value: 1,
    line: 1,
    column: 2,
  }

  cellsWrap.push(fieldCell)
  expect(cellsWrap.length).not.toBe(0);
  expect(cellsWrap.length).toBe(1);
});
