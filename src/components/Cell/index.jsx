import React from 'react'
import { connect } from 'react-redux'
import swapCalls from '../../actions/swapCalls'

import field from './style.module.css'

class Cell extends React.PureComponent {

  render() {
    const {
      cellsList,
      emptyCellLine,
      emptyCellColumn
    }= this.props

    return (
      <section className={field.wrapper}>
        {cellsList.map((cell) => (
          <button key={cell.value}
                    onClick={(cell.value > 0 ?
                      ()=>this.moveCell(cell.line, cell.column, emptyCellLine, emptyCellColumn, cell.value) :
                      this.test)}
                  >
            {
              cell.value > 0 ?
                cell.value :
                <></>
            }
          </button>
        ))}
      </section>
    )
  }

  moveCell = (currentCellLine, currentCellColumn, emptyCellLine, emptyCellColumn, currentValue) => {
    const diffModuleColumn = Math.abs(currentCellColumn - emptyCellColumn)<2;
    const diffModuleLine = Math.abs(currentCellLine - emptyCellLine) < 2;
    const conditionColumn = currentCellColumn === emptyCellColumn;
    const conditionLine = currentCellLine === emptyCellLine;
    (conditionLine && diffModuleColumn || conditionColumn && diffModuleLine) ?
      (this.props.swapCalls(currentCellLine, currentCellColumn, currentValue)) :
      (this.test())
  }

  test = () => {
    console.log('здесь будет предупреждение о том что так ходить низя');
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
