import authReducer from './authReducer'
import customiserReducer from './customiserReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  customiser: customiserReducer
})

export default rootReducer
