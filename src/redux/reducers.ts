import { combineReducers } from 'redux'
import auth from './reducers/authReducer'
import invoiceHistory from './reducers/invoiceHistoryReducer'

const reducers = combineReducers({
  auth,
  invoiceHistory
})

export default reducers
