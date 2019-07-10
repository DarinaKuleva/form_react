function swapCalls(currentCellLine, currentCellColumn, currentValue) {
  return {
    type: 'SWAP_CALLS',
    currentCellLine,
    currentCellColumn,
    currentValue
  }
}

export default swapCalls
