import { createStore } from 'redux'
import reducer from '../reducers/reducer'

const initialState = {
  cellsList: [],
  emptyCellLine: 0,
  emptyCellColumn: 0,
  moveCounter: 0

};

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
