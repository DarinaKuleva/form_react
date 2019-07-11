import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import swapCalls from '../../actions/swapCalls'

import field from './style.module.css'
import './cellsStyle.css'

class Cell extends React.PureComponent {

  static propTypes = {
    cellsList: PropTypes.array.isRequired,
    emptyCellLine: PropTypes.number.isRequired,
    emptyCellColumn: PropTypes.number.isRequired,
    swapCalls: PropTypes.func,
  }

  state = {
    showErrorMessage: false,
  }

  render() {

    const {
      cellsList,
    } = this.props

    return (
      <>
        <section className={field.wrapper}>
          {cellsList.map((cell) => (
            <button key={cell.value}
                    className={cell.value === 0
                      ? 'empty'
                      : (cell.value - 1) === cellsList.indexOf(cell)
                        ? 'done'
                        : 'cell'
                    }
                    onClick={(cell.value > 0
                        ? () => this.moveCell(cell.line, cell.column, cell.value)
                        : this.showError
                    )}
            >
              {cell.value > 0 && cell.value}
            </button>
          ))}
        </section>
        {this.state.showErrorMessage &&
        <div className={field.error}>
          Неверный ход
        </div>
        }
      </>
    )
  }

  moveCell = (currentCellLine, currentCellColumn, currentValue) => {
    const {
      emptyCellLine,
      emptyCellColumn,
    } = this.props

    const isColumnNear = Math.abs(currentCellColumn - emptyCellColumn) <= 1
    const isLineNear = Math.abs(currentCellLine - emptyCellLine) <= 1
    const isColumnEqually = currentCellColumn === emptyCellColumn
    const isLineEqually = currentCellLine === emptyCellLine
    const isMoveAllow = ((isLineEqually && isColumnNear) || (isColumnEqually && isLineNear));

    (isMoveAllow)
      ? (this.props.swapCalls(currentCellLine, currentCellColumn, currentValue))
      : (this.showError())
  }

  showError = () => {
    this.setState({
      showErrorMessage: !this.state.showErrorMessage,
    })
    setTimeout(() => {
      this.setState({
        showErrorMessage: !this.state.showErrorMessage,
      })
    }, 500)
  }

}

const mapStateToProps = (state) => {
  return {
    cellsList: state.cellsList,
    emptyCellLine: state.emptyCellLine,
    emptyCellColumn: state.emptyCellColumn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    swapCalls: (currentCellLine, currentCellColumn, currentValue) =>
      dispatch(swapCalls(currentCellLine, currentCellColumn, currentValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
