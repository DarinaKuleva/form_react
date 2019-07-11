import reducer from '../reducer'

describe('reducer', () => {

  it('START_GAME', () => {
    const initialState = {
      cellsList: [],
      emptyCellLine: 0,
      emptyCellColumn: 0,
      moveCounter: 0,
    }

    const action = {
      type: 'START_GAME',
      cellsList: [
        { value: 3, line: 1, column: 1 },
        { value: 0, line: 1, column: 2 },
        { value: 6, line: 1, column: 5 }
        ],
      emptyCellLine: 1,
      emptyCellColumn: 2,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      cellsList: action.cellsList,
      emptyCellLine: action.emptyCellLine,
      emptyCellColumn: action.emptyCellColumn,
    })
  })
  it('SWAP_CALLS', () => {
    const initialState = {
      cellsList: [
        { value: 3, line: 1, column: 1 },
        { value: 0, line: 1, column: 2 },
        { value: 6, line: 1, column: 5 }
        ],
      emptyCellLine: 1,
      emptyCellColumn: 2,
      moveCounter: 0,
    }

    const action = {
      type: 'SWAP_CALLS',
      currentCellLine: 1,
      currentCellColumn: 1,
      currentValue: 3,
    }

    expect(reducer(initialState, action)).toEqual({
      cellsList: [
        { value: 0, line: 1, column: 1 },
        { value: 3, line: 1, column: 2 },
        { value: 6, line: 1, column: 5 }
        ],
      emptyCellLine: 1,
      emptyCellColumn: 1,
      moveCounter: 1,
    })
  })
})
