import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

export default store
