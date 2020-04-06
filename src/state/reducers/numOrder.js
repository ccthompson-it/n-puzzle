import { randArray } from '../../game'

const initialState = {
  x: 0,
  y: 0
}

const position = (state = initialState, action) => {
  if (action.type === `CHANGE_EMPTY_POS`) {
    return {
      x: action.x,
      y: action.y
    }
  }
  return state
}

export default position