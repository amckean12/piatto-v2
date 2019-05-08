import { combineReducers } from 'redux'
import manageUsers from './splash-page-reducer.js'

const rootReducer = combineReducers({
  users: manageUsers
})


export default rootReducer
