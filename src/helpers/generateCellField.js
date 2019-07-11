import { compareRandom } from './compareRandom'
import { SIZE_HEIGHT_FIELD, SIZE_WIDTH_FIELD, GAME_NUMBERS } from '../constants'

export const generateCellField = () => {
  let amountGameNumbers = 0
  let cellsList = []
  let emptyCellLine = 0
  let emptyCellColumn = 0

  GAME_NUMBERS.sort(compareRandom)

  for (let width = 1; width <= SIZE_WIDTH_FIELD; width++) {
    for (let height = 1; height <= SIZE_HEIGHT_FIELD; height++) {
      let fieldCell = {
        value: GAME_NUMBERS[amountGameNumbers],
        line: width,
        column: height,
      }
      if (fieldCell.value === 0) {
        emptyCellLine = fieldCell.line
        emptyCellColumn = fieldCell.column
      }
      amountGameNumbers++
      cellsList.push(fieldCell)
    }
  }
  return {
    cellsList,
    emptyCellLine,
    emptyCellColumn,
  }
}
