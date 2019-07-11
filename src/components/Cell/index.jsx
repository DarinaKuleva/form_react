import React from 'react'
import { connect } from 'react-redux'
import swapCalls from '../../actions/swapCalls'

import field from './style.module.css'

class Cell extends React.PureComponent {

  state = {
    showErrorMessage: false
  }

  render() {

    const {
      cellsList,
      emptyCellLine,
      emptyCellColumn
    }= this.props

    return (
      <>
      <section className={field.wrapper}>
        {cellsList.map((cell) => (
          <button key={cell.value}
                    onClick={(cell.value > 0 ?
                      ()=>this.moveCell(cell.line, cell.column, emptyCellLine, emptyCellColumn, cell.value) :
                      this.showError)}
                  >
            {
              cell.value > 0 ?
                cell.value :
                <></>
            }
          </button>
        ))}
      </section>
          {this.state.showErrorMessage ?
            <div>Неверный ход</div> :
            <></>
          }
        </>
    )
  }

  moveCell = (currentCellLine, currentCellColumn, emptyCellLine, emptyCellColumn, currentValue) => {

    const columnSpacing = Math.abs(currentCellColumn - emptyCellColumn)<=1;
    const lineSpacing = Math.abs(currentCellLine - emptyCellLine)<=1;
    const equallyColumn = currentCellColumn === emptyCellColumn;
    const equallyLine = currentCellLine === emptyCellLine;
    const lineCheck = equallyLine && columnSpacing;
    const columnCheck =  equallyColumn && lineSpacing;

    (lineCheck || columnCheck) ?
      (this.props.swapCalls(currentCellLine, currentCellColumn, currentValue)) :
      (this.showError())
  }

  showError = () => {
    const self = this
    self.setState({ showErrorMessage: true })
    setTimeout(() => {
      self.setState({ showErrorMessage: false });
    }, 500);
  }

}

const mapStateToProps = (state) => {
  return {
    cellsList: state.cellsList,
    emptyCellLine: state.emptyCellLine,
    emptyCellColumn: state.emptyCellColumn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    swapCalls: (currentCellLine, currentCellColumn, currentValue) =>
      dispatch(swapCalls(currentCellLine, currentCellColumn, currentValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
