function startGame(cellsWrap, emptyCellLine, emptyCellColumn) {
  return {
    type: 'START_GAME',
    cellsList: cellsWrap,
    emptyCellLine,
    emptyCellColumn
  }
}

export default startGame
