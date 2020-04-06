import { randArray } from '../../game'

const initialState = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const numOrder = (state = initialState, action) => {
  if (action.type === `SCRAMBLE`) {
    return randArray(action.boardSize ** 2)
  }
  if (action.type === `CHANGE_POSITION`) {
    let newState = [...state]
    newState[action.id] = 0
    newState[action.emptyId] = action.num
    return newState
  }
  return state
}

export default numOrder