import React from 'react'
import field from './style.module.css'
import { connect } from 'react-redux'

class Field extends React.PureComponent {

  state = {
  GameNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]
}

  render() {

    const {
      GameList
    } = this.props

    const {
      GameNumbers
    } = this.state

    const compareRandom = (a, b) => {
      return Math.random() - 0.5
    }

    GameNumbers.sort(compareRandom)

    const sizeWidthField = 4;
    const sizeHeightField = 4;
    let amountGameNumbers = 0;

    for (let width=1;  width<=sizeWidthField; width++) {
      for (let height=1;  height<=sizeHeightField; height++) {
        let fieldCell = {
          value:GameNumbers[amountGameNumbers],
          line: width,
          column: height
        }
        GameList.push(fieldCell)
        amountGameNumbers++;
      }
    }

    return (
      <>
        <section className={field.wrapper}>
          {GameList.map((number) => (
            (
              number.value === null ?
                <button key={16}>null</button> :
                <button key={number.value}>{number.value}</button>
            )
          ))}
        </section>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    GameList: state.GameList,
  }
}

export default connect(mapStateToProps)(Field)
