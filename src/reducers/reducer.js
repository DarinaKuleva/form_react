export default function reducer(state, action) {
  switch (action.type) {
    case 'SWAP_CALLS':
      return {
        cellsList: state.cellsList.map(cell =>
          cell.line === action.currentCellLine &&
          cell.column === action.currentCellColumn
            ? { ...cell, value: 0 }
            : cell.line === state.emptyCellLine &&
              cell.column === state.emptyCellColumn
            ? { ...cell, value: action.currentValue }
            : cell
        ),
        emptyCellLine: action.currentCellLine,
        emptyCellColumn: action.currentCellColumn,
        moveCounter: state.moveCounter + 1,
      }
    case 'START_GAME':
      return {
        cellsList: action.cellsList,
        emptyCellLine: action.emptyCellLine,
        emptyCellColumn: action.emptyCellColumn,
        moveCounter: 0,
      }
    default:
      return state
  }
}
