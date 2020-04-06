import {combineReducers} from 'redux'

import position from './position'
import numOrder from './numOrder'

export default combineReducers({
    position,
    numOrder
})