import startGame from '../actions/startGame'
import swapCalls from '../actions/swapCalls'

it('startGame', () => {
  const expectedAction = {
    type: 'START_GAME',
    cellsList: 'someCellsList',
    emptyCellLine: 'someEmptyCellLine',
    emptyCellColumn: 'someEmptyCellColumn',
  }
  expect(startGame('someCellsList', 'someEmptyCellLine', 'someEmptyCellColumn')).toEqual(expectedAction)
})

it('swapCalls', () => {
  const expectedAction = {
    type: 'SWAP_CALLS',
    currentCellLine: 'someCurrentCellLine',
    currentCellColumn: 'someCurrentCellColumn',
    currentValue: 'someCurrentValue',
  }
  expect(swapCalls('someCurrentCellLine', 'someCurrentCellColumn', 'someCurrentValue')).toEqual(expectedAction)
})
