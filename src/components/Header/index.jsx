import React from 'react'
import drawCells from '../../actions/startGame'
import { connect } from 'react-redux'

class Header extends React.PureComponent {

  state = {
    gameNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
  }

  render() {

    const {
      gameNumbers,
    } = this.state

    const {
      moveCounter,
    } = this.props

    const compareRandom = (a, b) => {
      return Math.random() - 0.5
    }

    gameNumbers.sort(compareRandom)

    const sizeWidthField = 4
    const sizeHeightField = 4
    let amountGameNumbers = 0
    let cellsWrap = []
    let emptyCellLine = 0;
    let emptyCellColumn = 0

    const startGame = () => {
      for (let width = 1; width <= sizeWidthField; width++) {
        for (let height = 1; height <= sizeHeightField; height++) {
          let fieldCell = {
            value: gameNumbers[amountGameNumbers],
            line: width,
            column: height,
          }
          if (fieldCell.value === 0) {
            emptyCellLine = fieldCell.line;
            emptyCellColumn = fieldCell.column
          }
          amountGameNumbers++
          cellsWrap.push(fieldCell)
        }
      }
      this.props.drawCells(cellsWrap, emptyCellLine, emptyCellColumn)
    }
    return (
      <header>
        <button onClick={startGame}>Start Game</button>
        <section>
          <div>Число ходов: {moveCounter}</div>
        </section>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cellsList: state.cellsList,
    emptyCellLine: state.emptyCellLine,
    emptyCellColumn: state.emptyCellColumn,
    moveCounter: state.moveCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    drawCells: (cellsWrap, emptyCellLine, emptyCellColumn) => dispatch(drawCells(cellsWrap, emptyCellLine, emptyCellColumn)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
