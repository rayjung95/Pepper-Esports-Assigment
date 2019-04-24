import { combineReducers } from 'redux'
import {todoReducer} from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todoReducer,
  visibilityFilter
})
