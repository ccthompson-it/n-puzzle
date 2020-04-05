import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `CHANGENUM`) {
    return {
      num: action.newNum
    }
  }
  return state
}

const initialState = { num: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore