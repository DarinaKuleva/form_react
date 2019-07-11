import {compareRandom} from '../compareRandom'
import { generateCellField } from '../generateCellField'
import { GAME_NUMBERS } from '../../constants'

describe('reducer', () => {

  it('generate random field', () => {
    let field = compareRandom(GAME_NUMBERS);

    expect(compareRandom(GAME_NUMBERS)).not.toEqual(field);
    expect(compareRandom(GAME_NUMBERS)).not.toEqual(field);
  });

  it('check cellsWrap length', () => {
    let field = generateCellField();

    expect(field.cellsList.length).toBe(16);
  });
})
