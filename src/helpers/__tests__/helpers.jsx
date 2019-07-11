import {compareRandom} from '../compareRandom'
import { generateCellField } from '../generateCellField'
import { GAME_NUMBERS } from '../../constants'

describe('reducer', () => {

  it('generate random field', () => {
    let grid = compareRandom(GAME_NUMBERS);

    expect(compareRandom(GAME_NUMBERS)).not.toEqual(grid);
    expect(compareRandom(GAME_NUMBERS)).not.toEqual(grid);
  });
  it('check cellsWrap length', () => {
    let cellsWrap = generateCellField();

    expect(cellsWrap.cellsWrap.length).toBe(16);
  });
})
