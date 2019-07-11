import startGame from '../startGame'
import swapCalls from '../swapCalls'

describe('actions', () => {

  it('START_GAME', () => {
    const expectedAction = {
      type: 'START_GAME',
      cellsList: [
        { value: 3, line: 1, column: 1 },
        { value: 0, line: 1, column: 2 },
        { value: 6, line: 1, column: 5 }
      ],
      emptyCellLine: 1,
      emptyCellColumn: 2,
    }
    expect(startGame(
      [
        { value: 3, line: 1, column: 1 },
        { value: 0, line: 1, column: 2 },
        { value: 6, line: 1, column: 5 }
      ],
      1,
      2
    )).toEqual(expectedAction)
  })

  it('SWAP_CALLS', () => {
    const expectedAction = {
      type: 'SWAP_CALLS',
      currentCellLine: 2,
      currentCellColumn: 3,
      currentValue: 1,
    }
    expect(swapCalls(
      2,
      3,
      1
    )).toEqual(expectedAction)
  })
})
