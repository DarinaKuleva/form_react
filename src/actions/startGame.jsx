function startGame(cellsList, emptyCellLine, emptyCellColumn) {
  return {
    type: 'START_GAME',
    cellsList,
    emptyCellLine,
    emptyCellColumn
  }
}

export default startGame
