import { randArray } from '../../game'

const initialState = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const position = (state = initialState, action) => {
  if (action.type === `SCRAMBLE`) {
    return randArray(action.boardSize ** 2)
  }
  return state
}

export default position