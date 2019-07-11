import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import drawCells from '../../actions/startGame'
import { generateCellField } from '../../helpers/generateCellField'

import header from './style.module.css'

class Header extends React.PureComponent {

  static propTypes = {
    moveCounter: PropTypes.number.isRequired,
    drawCells: PropTypes.func
  }

  render() {
    const {
      moveCounter,
    } = this.props

    return (
      <header className={header.wrapper}>
        <button
          onClick={this.startGame}
          className={header.start_button}
        >
          Начать новую игру
        </button>
        {moveCounter > 0 &&
        <div className={header.move_counter}>
          Число ходов: {moveCounter}
        </div>}
      </header>
    )
  }

  startGame = () => {
    const {cellsWrap, emptyCellLine, emptyCellColumn} = generateCellField();
    this.props.drawCells(cellsWrap, emptyCellLine, emptyCellColumn);
  }
}

const mapStateToProps = (state) => {
  return {
    moveCounter: state.moveCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    drawCells: (wrap, line, column) => dispatch(drawCells(wrap, line, column)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
