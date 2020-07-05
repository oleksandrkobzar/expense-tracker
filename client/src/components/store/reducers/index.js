import { combineReducers } from 'redux'

import rootReducer from './rootReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
  rootReducer,
  categoryReducer
})