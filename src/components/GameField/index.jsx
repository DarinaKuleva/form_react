import React from 'react'
import field from './style.module.css'

class Field extends React.PureComponent {
  render() {

    const GameNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

    const compareRandom = (a, b) => {
      return Math.random() - 0.5
    }

    GameNumbers.sort(compareRandom)

    return (
      <section className={field.wrapper}>
        {GameNumbers.map((number) => (
          (
            number === null ?
              <button key={16}>null</button> :
              <button key={number}>{number}</button>
          )
        ))}
      </section>
    )
  }

}

export default Field
